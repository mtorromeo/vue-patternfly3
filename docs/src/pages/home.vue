<template>
<article class="home">
  <header class="jumbotron">
    <h1>Vue PatternFly</h1>
    <p class="description">
      PatternFly components for Vue.js 2
    </p>
    <p>
      <router-link to="/get-started" :exact="true">
        <a class="btn btn-primary">Get Started</a>
      </router-link>
      <a :href="github" class="btn btn-default">GITHUB</a>
    </p>
    <p class="version">
      Version {{version}}
    </p>
  </header>

  <section class="container-fluid">
    <h2>About Vue PatternFly</h2>
    <p>Vue PatternFly implements a set of reusable Vue.js components following the PatternFly design patterns and usage guidelines to facilitate building of enterprise IT applications.</p>

    <div class="row row-cards-pf">
      <div class="col-xs-12 col-md-4">
        <pf-card title="About Vue.js">
          <div>«Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.»</div>
          <div><a href="https://vuejs.org/" target="_blank">WebSite <span class="fa fa-external-link"></span></a></div>
        </pf-card>
      </div>

      <div class="col-xs-12 col-md-4">
        <pf-card title="About PatternFly">
          <div>«PatternFly is a community project that promotes design commonality and improved user experience. Its offerings include open source code, patterns, style guides and an active community that helps support it all.»</div>
          <div><a href="http://www.patternfly.org/" target="_blank">WebSite <span class="fa fa-external-link"></span></a></div>
        </pf-card>
      </div>

      <div class="col-xs-12 col-md-4">
        <pf-card title="About VueStrap">
          <div>«Bootstrap components built with Vue.js.»</div>
          <div>Since PatternFly is built on top of the Bootstrap framework, VueStrap is a natural complement library.</div>
          <div><a href="http://yuche.github.io/vue-strap/" target="_blank">WebSite <span class="fa fa-external-link"></span></a></div>
        </pf-card>
      </div>
    </div>
  </section>
</article>
</template>

<script>
import pkg from '../../../package.json';

export default {
  name: 'home-page',

  data() {
    return {
      version: pkg.version,
    };
  },

  computed: {
    github() {
      return pkg.repository.url.replace(/^git\+|\.git$/g, '');
    },
  },
};
</script>
