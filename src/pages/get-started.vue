<template>
<article class="page">
  <header>
    <h1>Get Started</h1>
  </header>

  <section>
    <p>Using the vue-patternfly module is really simple as it can be simply included in the HTML of the page as a script tag or required/imported following either CommonJS or AMD specs.</p>
    <p>The guide that you are reading is using vue-patternfly itself and imports every dependency as script/style tags.</p>

    <h3>HTML</h3>
    <pre><code class="lang-html" v-text="example1"></code></pre>

    <h3>JavaScript</h3>
    <pre><code class="lang-javascript" v-text="initsample"></code></pre>
  </section>
</article>
</template>

<script>
import example1 from './get-started/example1.html';
import initsample from './get-started/init.sample.js';

export default {
  name: 'get-started-page',

  data() {
    return {
      example1,
      initsample,
    };
  },
};
</script>
