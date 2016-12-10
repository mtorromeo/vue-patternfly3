<template>
<article class="page">
  <header>
    <h1>Card Container <code>&lt;pf-card&gt;</code></h1>
  </header>

  <section>
    <div class="cards-pf container-fluid container-cards-pf">
      <div class="row-cards-pf">
        <pf-card class="col-md-5"
                 :title="card.title"
                 :sub-title="card.subTitle"
                 :foot-note="card.footNote"
                 :foot-href="card.footHref"
                 :foot-icon="card.footIcon"
                 :accented="card.accented"
                 :show-titles-separator="card.showTitlesSeparator"
        ></pf-card>
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
</article>
</template>

<script>
import VuePatternfly from 'vue-patternfly';
const Card = VuePatternfly.Card;

export default {
  name: 'cards-page',

  data() {
    return {
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
    };
  },
};
</script>
