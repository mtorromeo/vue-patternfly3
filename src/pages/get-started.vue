<template>
<article class="page">
  <header>
    <h1>Get Started</h1>
  </header>

  <section>
    <p>Using the vue-patternfly module is really simple as it can be simply included in the HTML of the page as a script tag or required/imported following either CommonJS or ES6 specs.</p>
    <p>The guide that you are reading is using vue-patternfly itself and imports every dependency as script/style tags.</p>

    <h3>HTML</h3>
    <pre><code class="lang-html" v-text="htmlsample"></code></pre>

    <h3>DOM Script</h3>
    <pre><code class="lang-javascript" v-text="browsersample"></code></pre>

    <h3>ES6 module</h3>
    <pre><code class="lang-javascript" v-text="es6sample"></code></pre>

    <h3>CommonJS module</h3>
    <pre><code class="lang-javascript" v-text="commonjssample"></code></pre>
  </section>
</article>
</template>

<script>
import htmlsample from './get-started/example1.html';
import browsersample from './get-started/browser.sample.js';
import es6sample from './get-started/es6.sample.js';
import commonjssample from './get-started/commonjs.sample.js';

export default {
  name: 'get-started-page',

  data() {
    return {
      htmlsample,
      browsersample,
      es6sample,
      commonjssample,
    };
  },
};
</script>
