<template>
  <div v-bind="ouiaProps" class="table-wrapper">
    <table v-if="scrollable"
           class="table dataTable table-head-clone"
           :style="{
             opacity: showClones ? 1 : 0,
           }"
           :class="{
             'table-striped': striped,
             'table-bordered': bordered,
             'table-hover': hover,
           }"
    >
      <thead ref="theadClone">
        <tr>
          <th v-if="selectable" class="table-view-pf-select" aria-label="Select all rows">
            <label>
              <span class="sr-only">Select all rows</span>
              <input type="checkbox" @change="changeSelectAll">
            </label>
          </th>
          <th
            v-for="(column, i) in columns"
            :key="i"
            :class="{
              sorting: sortable && column != sortBy,
              sorting_asc: sortable && column == sortBy && sortDirection == 'asc',
              sorting_desc: sortable && column == sortBy && sortDirection == 'desc',
            }"
            @click="setSortBy(column, column != sortBy || sortDirection == 'desc' ? 'asc' : 'desc')"
          >
            {{ column }}
          </th>
          <th v-if="actionSpan" :colspan="actionSpan">
            Actions
          </th>
        </tr>
      </thead>
    </table>

    <div class="table-overflow-container">
      <table class="table dataTable" role="grid" :class="{
        'table-striped': striped,
        'table-bordered': bordered,
        'table-hover': hover,
      }" :style="{
        'margin-top': scrollable ? `-${headHeight + 1}px` : 0,
      }">
        <thead ref="thead">
          <tr role="row">
            <th v-if="selectable" class="table-view-pf-select" aria-label="Select all rows">
              <label>
                <span class="sr-only">Select all rows</span>
                <input type="checkbox" @change="changeSelectAll">
              </label>
            </th>
            <th
              v-for="(column, i) in columns"
              :key="i"
              :class="{
                sorting: sortable && column != sortBy,
                sorting_asc: sortable && column == sortBy && sortDirection == 'asc',
                sorting_desc: sortable && column == sortBy && sortDirection == 'desc',
              }"
              @click="setSortBy(column, column != sortBy || sortDirection == 'desc' ? 'asc' : 'desc')"
            >
              {{ column }}
            </th>
            <th v-if="actionSpan" :colspan="actionSpan">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          <pf-table-row v-for="(row, i) in rows" ref="rowItems" :key="keyFor(row, i)" :num="i" :selectable="selectable">
            <slot :row="row" />
            <template v-if="$slots.action" #action>
              <slot name="action" :row="row" />
            </template>
            <template v-if="$slots.dropdown" #dropdown>
              <slot name="dropdown" :row="row" />
            </template>
          </pf-table-row>
        </tbody>
      </table>
    </div>

    <pf-paginate-control
      v-if="itemsPerPage > 0"
      ref="pagination"
      type="table"
      :page="page"
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      :items-per-page-options="itemsPerPageOptions"
      @update:items-per-page="$emit('update:itemsPerPage', $event)"
      @change="$emit('update:page', $event)"
    >
      <slot name="footer" />
    </pf-paginate-control>
  </div>
</template>

<script lang="ts">
import ResizeObserver from 'resize-observer-polyfill';
import PfTableRow from './TableRow.vue';
import PfPaginateControl from './PaginateControl.vue';
import debounce from 'lodash-es/debounce';
import { ouiaProps, useOUIAProps } from '../ouia';
import { defineComponent, nextTick, onMounted, onUnmounted, PropType, ref, watch } from 'vue';
import { SortDirection } from './Sort.vue';

export default defineComponent({
  name: 'PfTable',

  components: {
    PfTableRow,
    PfPaginateControl,
  },

  props: {
    page: Number,
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 25,
    },
    itemsPerPageOptions: {
      type: Array as PropType<number[]>,
      default: () => [10, 25, 50, 100, 500],
    },
    columns: {
      type: Array as PropType<string[]>,
      default: (): string[] => [],
    },
    rows: {
      type: Array as PropType<Record<string, unknown>[]>,
      default: (): Record<string, unknown>[] => [],
    },
    keyName: String,
    striped: Boolean,
    bordered: Boolean,
    hover: Boolean,
    selectable: Boolean,
    scrollable: Boolean,
    sortable: Boolean,
    sortBy: String,
    sortDirection: String as PropType<SortDirection>,
    ...ouiaProps,
  },

  emits: ['update:page', 'update:itemsPerPage', 'sort-by', 'update:sortBy', 'update:sortDirection'],

  setup(props) {
    const thead = ref<HTMLTableSectionElement | null>(null);
    const theadClone = ref<HTMLTableSectionElement | null>(null);
    const rowItems = ref<InstanceType<typeof PfTableRow>[]>([]);
    const headHeight = ref(27);
    const showClones = ref(false);
    const paginationHeight = ref(38);
    const pagination = ref<InstanceType<typeof PfPaginateControl> | null>(null);

    const syncHeaders = debounce(() => {
      if (!theadClone.value || !thead.value) {
        return;
      }

      const ths = thead.value.rows[0].cells;
      const thsC = theadClone.value.rows[0].cells;

      let i = 0;
      for (const th of ths) {
        if (i == 0 && props.selectable) {
          i++;
          continue;
        }

        const thC = thsC[i];

        if (i == thsC.length - 1) {
          thC.style.width = 'auto';
        } else {
          thC.style.width = `${th.clientWidth + 1}px`;
        }
        i++;
      }

      showClones.value = true;
    }, 50);

    const headObserver = new ResizeObserver((entries) => {
      if (!props.scrollable) {
        return;
      }

      if (!theadClone.value) {
        return;
      }

      for (const entry of entries) {
        if (!entry.target.parentElement) {
          continue;
        }

        if (entry.target.tagName === 'THEAD') {
          headHeight.value = theadClone.value.clientHeight;
        } else {
          syncHeaders();
        }
      }
    });

    const paginationObserver = new ResizeObserver((entries) => {
      if (!props.scrollable) {
        return;
      }

      for (const entry of entries) {
        if (entry.target == pagination.value.$el) {
          paginationHeight.value = pagination.value.$el.clientHeight;
          break;
        }
      }
    });

    const observeThead = () => {
      const row = thead.value.rows[0];
      for (let i = 0; i < row.cells.length; i++) {
        if (i == 0 && props.selectable) {
          continue;
        }
        const cell = row.cells[i];
        if (cell instanceof HTMLTableCellElement) {
          headObserver.observe(cell);
        }
      }
    };

    const scrollableUnwatch = watch(() => props.scrollable, () => {
      if (props.scrollable) {
        showClones.value = false;
        if (thead.value instanceof HTMLTableSectionElement) {
          headObserver.observe(thead.value);
        }
        paginationObserver.observe(pagination.value.$el);
        observeThead();
      } else {
        headObserver.disconnect();
        paginationObserver.disconnect();
      }
    }, {
      immediate: true,
    });

    watch(() => props.columns, () => nextTick(observeThead), {
      deep: true,
    });

    onMounted(() => {
      if (thead.value instanceof HTMLTableSectionElement) {
        headObserver.observe(thead.value);
      }
      paginationObserver.observe(pagination.value.$el);
    });

    onUnmounted(() => {
      headObserver.disconnect();
      paginationObserver.disconnect();
      scrollableUnwatch();
    });

    return {
      thead,
      theadClone,
      rowItems,
      pagination,
      showClones,
      headHeight,
      ...useOUIAProps(props),
    };
  },

  computed: {
    actionSpan() {
      let colspan = 0;
      if (this.$slots.action) {
        colspan++;
      }
      if (this.$slots.dropdown) {
        colspan++;
      }
      return colspan;
    },
  },

  methods: {
    setSortBy(field: string, direction: SortDirection) {
      this.$emit('sort-by', field, direction);
      this.$emit('update:sortBy', field);
      this.$emit('update:sortDirection', direction);
    },

    changeSelectAll(e: Event) {
      if (e.target instanceof HTMLInputElement) {
        this.setAllSelected(e.target.checked);
      }
    },

    setAllSelected(selected = true) {
      for (const row of this.rowItems) {
        row.selected = selected;
      }
    },

    getSelected() {
      const selected = [];
      for (const row of this.rowItems) {
        const id = row.num;
        if (typeof id !== 'undefined' && row.selected && this.rows[id]) {
          selected.push(this.rows[id]);
        }
      }
      return selected;
    },

    keyFor(value: unknown, fallback: string | number): string | number {
      return value && (value === 'string' || typeof value === 'number') ? value : fallback;
    },
  },
});
</script>

<style>
.table-wrapper {
  position: relative;
  overflow: visible;
}

table-head-clone {
  position: absolute;
}

.table-overflow-container {
  overflow: auto;
  height: 100%;
}

table.dataTable {
  height: auto;
  position: relative;
}

.table-view-pf-select label {
  display: initial;
  font-weight: initial;
}

.table-view-pf-select input[type=checkbox] {
  margin: 0;
  position: relative;
  top: 2px;
}

.table-view-pf-actions .caret:before {
  content: "\f142"; /* fa-ellipsis-v */
}
</style>
