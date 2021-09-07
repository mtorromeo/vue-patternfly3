<template>
  <article class="page">
    <header>
      <h1>Expand Collapse <code>pf-expand-collapse</code></h1>
    </header>

    <section>
      <p>This is an implementation of the Expand/Collapse Section pattern.</p>

      <h4>Related documentation</h4>
      <ol>
        <li><a href="https://www.patternfly.org/v3/pattern-library/forms-and-controls/expand-collapse-section/" target="_blank">Pattern Library > Form and Controls > Expand/Collapse Section</a></li>
      </ol>

      <div class="demo-container">
        <pf-expand-collapse bordered>
          <p>Well done! The component takes 100% width by default and aligns the link to the left or center.</p>
          <p>And other text comes here.</p>
        </pf-expand-collapse>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'expand-collapse',
};
</script>
