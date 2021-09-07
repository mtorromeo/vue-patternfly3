<template>
  <article class="page">
    <header>
      <h1>Card <code>&lt;pf-card&gt;</code></h1>
    </header>

    <section>
      <p>This card components are designed for dashboard views and are meant to be placed on a darker background which can be implemented like in the following snippet.</p>

      <pre><code class="language-markup" v-text="cardcontainersample" /></pre>

      <h4>Related documentation</h4>
      <ol>
        <li><a href="https://www.patternfly.org/v3/pattern-library/dashboard/dashboard-card/#/api" target="_blank">Pattern Library > Dashboard Cards</a></li>
      </ol>

      <div class="cards-pf container-fluid container-cards-pf">
        <div class="row row-cards-pf">
          <div class="col-md-5 col-lg-3">
            <pf-card
              :title="card.title"
              :sub-title="card.subTitle"
              :foot-note="card.footNote"
              :foot-href="card.footHref"
              :foot-icon="card.footIcon"
              :accented="card.accented"
              :show-titles-separator="card.showTitlesSeparator">
              <template #default>
                Test content
              </template>
            </pf-card>
          </div>

          <div class="col-md-5 col-lg-3">
            <pf-card
              :title="card.title"
              :sub-title="card.subTitle"
              :foot-note="card.footNote"
              :foot-href="card.footHref"
              :foot-icon="card.footIcon"
              :accented="card.accented"
              :show-titles-separator="card.showTitlesSeparator">
              <template #default>
                &lt;template slot=&quot;default&quot;&gt;
              </template>
              <template #header>
                &lt;template slot=&quot;header&quot;&gt;
              </template>
              <template #footer>
                &lt;template slot=&quot;footer&quot;&gt;
              </template>
            </pf-card>
          </div>
        </div>
      </div>

      <props-table :component-props="cardProps">
        <props-row v-model="card.title" name="title" description="Title for the card" />
        <props-row v-model="card.subTitle" name="subTitle" description="Subtitle for the card" />
        <props-row v-model="card.footNote" name="footNote" description="Display this text in a footer of the card" />
        <props-row v-model="card.footHref" name="footHref" description="Make the footer a link to this href" />
        <props-row v-model="card.footIcon" name="footIcon" description="Footer icon represented by icon font CSS classes" />
        <props-row v-model="card.accented" name="accented" description="Display accent on top of card" />
        <props-row v-model="card.showTitlesSeparator" name="showTitlesSeparator" description="Show separation between title and content" />
      </props-table>

      <slots-table readonly>
        <slots-row name="default" description="The body of the card" />
        <slots-row name="header" description="Can be used to override the header's content" />
        <slots-row name="footer" description="Can be used to override the footer's content" />
      </slots-table>
    </section>

    <header>
      <h1>Aggregate Status Card <code>&lt;pf-aggregate-status-card&gt;</code></h1>
      <span class="label label-default">functional</span>
      <br>
      <h1>Card Notification <code>&lt;pf-card-notification&gt;</code></h1>
      <span class="label label-default">functional</span>
    </header>

    <section>
      <p>The aggregated status card shows a total number of objects and an aggregated status for those objects. The component works by using a container <code>&lt;pf-aggregate-status-card&gt;</code> with one or more <code>&lt;pf-card-notification&gt;</code> components inside.</p>

      <h4>Related documentation</h4>
      <ol>
        <li><a href="https://www.patternfly.org/v3/pattern-library/cards/aggregate-status-card/#/api" target="_blank">Pattern Library > Aggregate Status Card</a></li>
      </ol>

      <div class="cards-pf container-fluid container-cards-pf">
        <div class="row-cards-pf">
          <pf-aggregate-status-card class="col-md-5 col-lg-3"
                                    :title="aggcard.title"
                                    :count="aggcard.count"
                                    :href="aggcard.href"
                                    :icon="aggcard.icon"
                                    :layout="aggcard.layout"
                                    :accented="aggcard.accented">
            <pf-card-notification :icon="notcard.icon"
                                  :href="notcard.href"
                                  :count="notcard.count" />
            <pf-card-notification icon="pficon pficon-warning-triangle-o" href="#" count="1" />
          </pf-aggregate-status-card>
        </div>
      </div>

      <props-table title="pf-aggregate-status-card props" :component-props="aggcardProps">
        <props-row v-model="aggcard.title" name="title" description="Name of the represented items" />
        <props-row v-model="aggcard.count" name="count" description="Number of items represented" />
        <props-row v-model="aggcard.href" name="href" description="Make the title a link to this href" />
        <props-row v-model="aggcard.icon" name="icon" description="Icon represented by icon font CSS classes" />
        <props-row v-model="aggcard.layout" name="layout" :options="['', 'mini', 'tall']" description="Alternative layout" />
        <props-row v-model="aggcard.accented" name="accented" description="Display accent on top of card" />
      </props-table>

      <props-table title="pf-card-notification props" :component-props="notcardProps">
        <props-row v-model="notcard.count" name="count" description="Number of items represented" />
        <props-row v-model="notcard.href" name="href" description="Link to this href" />
        <props-row v-model="notcard.icon" name="icon" description="Icon represented by icon font CSS classes" />
      </props-table>
    </section>
  </article>
</template>

<script>
import cardcontainersample from './cards/card-container.html?raw';
import { Card, AggregateStatusCard, CardNotification } from 'vue-patternfly';

export default {
  name: 'cards-page',

  data() {
    return {
      cardcontainersample,
      cardProps: Card.props,
      card: {
        title: 'Test title',
        subTitle: '',
        footNote: '',
        footHref: '',
        footIcon: 'fa-bell',
        accented: true,
        showTitlesSeparator: true,
      },
      aggcardProps: AggregateStatusCard.props,
      aggcard: {
        title: 'Issues',
        count: 4,
        href: '#',
        icon: 'fa-warning',
        layout: '',
        accented: true,
      },
      notcardProps: CardNotification.props,
      notcard: {
        count: 3,
        href: '#',
        icon: 'pficon-error-circle-o',
      },
    };
  },
};
</script>
