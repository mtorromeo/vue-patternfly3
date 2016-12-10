<template>
<article class="page">
  <header>
    <h1>Card <code>&lt;pf-card&gt;</code></h1>
  </header>

  <section>
    <p>This card components are designed for dashboard views and are meant to be placed on a darker background which can be implemented like in the following snippet.</p>

    <pre><code class="language-markup" v-text="cardcontainersample"></code></pre>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/dashboard/dashboard-card/#/api" target="_blank">Pattern Library > Dashboard Cards</a></li>
    </ol>

    <div class="cards-pf container-fluid container-cards-pf">
      <div class="row-cards-pf">
        <pf-card class="col-md-5 col-lg-3"
                 :title="card.title"
                 :sub-title="card.subTitle"
                 :foot-note="card.footNote"
                 :foot-href="card.footHref"
                 :foot-icon="card.footIcon"
                 :accented="card.accented"
                 :show-titles-separator="card.showTitlesSeparator">
        </pf-card>
      </div>
    </div>

    <props-table :component-props="cardProps">
      <props-row name="title" description="Title for the card" v-model="card.title"></props-row>
      <props-row name="subTitle" description="Subtitle for the card" v-model="card.subTitle"></props-row>
      <props-row name="footNote" description="Display this text in a footer of the card" v-model="card.footNote"></props-row>
      <props-row name="footHref" description="Make the footer a link to this href" v-model="card.footHref"></props-row>
      <props-row name="footIcon" description="Footer icon represented by icon font CSS classes" v-model="card.footIcon"></props-row>
      <props-row name="accented" description="Display accent on top of card" v-model="card.accented"></props-row>
      <props-row name="showTitlesSeparator" description="Show separation between title and content" v-model="card.showTitlesSeparator"></props-row>
    </props-table>
  </section>


  <header>
    <h1>Aggregate Status Card <code>&lt;pf-aggregate-status-card&gt;</code> + Card Notification <code>&lt;pf-card-notification&gt;</code></h1>
  </header>

  <section>
    <p>The aggregated status card shows a total number of objects and an aggregated status for those objects. The component works by using a container <code>&lt;pf-aggregate-status-card&gt;</code> with one or more <code>&lt;pf-card-notification&gt;</code> components inside.</p>

    <h4>Related documentation</h4>
    <ol>
      <li><a href="http://www.patternfly.org/pattern-library/cards/aggregate-status-card/#/api" target="_blank">Pattern Library > Aggregate Status Card</a></li>
    </ol>

    <div class="cards-pf container-fluid container-cards-pf">
      <div class="row-cards-pf">
        <pf-aggregate-status-card class="col-md-5 col-lg-3"
                 :title="aggcard.title"
                 :count="aggcard.count"
                 :href="aggcard.href"
                 :icon-class="aggcard.iconClass"
                 :layout="aggcard.layout"
                 :accented="aggcard.accented">
          <pf-card-notification :icon-class="notcard.iconClass"
                                :href="notcard.href"
                                :count="notcard.count">
          </pf-card-notification>
          <pf-card-notification icon-class="pficon pficon-warning-triangle-o" href="#" count="1"></pf-card-notification>
        </pf-aggregate-status-card>
      </div>
    </div>

    <props-table title="pf-aggregate-status-card props" :component-props="aggcardProps">
      <props-row name="title" description="Name of the represented items" v-model="aggcard.title"></props-row>
      <props-row name="count" description="Number of items represented" v-model="aggcard.count"></props-row>
      <props-row name="href" description="Make the title a link to this href" v-model="aggcard.href"></props-row>
      <props-row name="iconClass" description="Icon represented by icon font CSS classes" v-model="aggcard.iconClass"></props-row>
      <props-row name="layout" :options="['', 'mini', 'tall']" description="Alternative layout" v-model="aggcard.layout"></props-row>
      <props-row name="accented" description="Display accent on top of card" v-model="aggcard.accented"></props-row>
    </props-table>

    <props-table title="pf-card-notification props" :component-props="notcardProps">
      <props-row name="count" description="Number of items represented" v-model="notcard.count"></props-row>
      <props-row name="href" description="Link to this href" v-model="notcard.href"></props-row>
      <props-row name="iconClass" description="Icon represented by icon font CSS classes" v-model="notcard.iconClass"></props-row>
    </props-table>
  </section>
</article>
</template>

<script>
import cardcontainersample from './cards/card-container.html';
import VuePatternfly from 'vue-patternfly';
const Card = VuePatternfly.Card;
const AggregateStatusCard = VuePatternfly.AggregateStatusCard;
const CardNotification = VuePatternfly.CardNotification;

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
        footIcon: 'fa fa-bell',
        accented: true,
        showTitlesSeparator: true,
      },
      aggcardProps: AggregateStatusCard.props,
      aggcard: {
        title: 'Issues',
        count: 4,
        href: '#',
        iconClass: 'fa fa-warning',
        layout: '',
        accented: true,
      },
      notcardProps: CardNotification.props,
      notcard: {
        count: 3,
        href: '#',
        iconClass: 'pficon pficon-error-circle-o',
      },
    };
  },
};
</script>
