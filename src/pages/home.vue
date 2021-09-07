<template>
  <article class="home">
    <header class="jumbotron">
      <h1>Vue PatternFly</h1>
      <p class="description">
        PatternFly 3 components for Vue 3
      </p>
      <p>
        The project is in a <strong>passively maintained</strong> state and was formerly implemented for Vue 2 but has been ported to Vue 3 in order to facilitate the transition of applications to Vue 3 and subsequently to the new <a href="https://github.com/mtorromeo/vue-patternfly4">PatternFly 4 version of this library</a>. Only bug fixes will be applied to this version as all development is now done on vue-patternfly4.
      </p>
      <p>
        <router-link to="/get-started" :exact="true">
          <a class="btn btn-primary">Get Started</a>
        </router-link>
        <a :href="github" class="btn btn-default"><span class="fa fa-github" /> GITHUB</a>
      </p>
      <p class="version">
        Version {{ version }}
      </p>
    </header>

    <section class="container-fluid">
      <h2>About VuePatternFly</h2>
      <p>VuePatternFly implements a set of reusable Vue components following the PatternFly design patterns and usage guidelines to facilitate building of enterprise IT applications.</p>

      <div class="row row-cards-pf">
        <div class="col-xs-12 col-md-6">
          <pf-card title="About Vue">
            <div>«Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.»</div>
            <div><a href="https://vuejs.org/" target="_blank">WebSite <span class="fa fa-external-link" /></a></div>
          </pf-card>
        </div>

        <div class="col-xs-12 col-md-6">
          <pf-card title="About PatternFly">
            <div>«PatternFly is a community project that promotes design commonality and improved user experience. Its offerings include open source code, patterns, style guides and an active community that helps support it all.»</div>
            <div><a href="https://www.patternfly.org/v3/" target="_blank">WebSite <span class="fa fa-external-link" /></a></div>
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
