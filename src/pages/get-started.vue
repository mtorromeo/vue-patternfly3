<template>
  <article class="page">
    <header>
      <h1>Get Started</h1>
    </header>

    <section>
      <p>The example configuration provided below makes use of <a href="https://vitejs.dev/guide/why.html" target="_blank">Vite</a>.</p>

      <h2>Installation</h2>
      <pre><code>yarn create vite my-vue-app --template vue
yarn add -D vue-patternfly</code></pre>

      <h3>/vite.config.js</h3>
      <pre><code class="lang-javascript" v-text="viteSample" /></pre>

      <h3>/index.html</h3>
      <pre><code class="lang-html" v-text="htmlSample" /></pre>

      <h3>/src/main.js</h3>
      <pre><code class="lang-javascript" v-text="jsSample" /></pre>

      <h3>/src/App.vue</h3>
      <pre><code class="lang-html" v-text="appSample" /></pre>
    </section>
  </article>
</template>

<script>
import htmlSample from './get-started/index.html?raw';
import jsSample from './get-started/main.sample.js?raw';
import viteSample from './get-started/vite.sample.js?raw';
import appSample from './get-started/App.sample.vue?raw';

export default {
  name: 'get-started-page',

  data() {
    return {
      htmlSample,
      jsSample,
      viteSample,
      appSample,
    };
  },
};
</script>
