<template>
<article class="page">
  <header>
    <h1>Get Started</h1>
  </header>

  <section>
    <p>Using the vue-patternfly module is really simple as it can be simply included in the HTML of the page as a script tag or required/imported following either CommonJS or AMD specs.</p>
    <p>The guide that you are reading is using vue-patternfly itself and imports every dependency as script/style tags.</p>

    <h3>HTML</h3>
    <pre><code class="lang-html">&lt;html&gt;
    &lt;head&gt;
      &lt;link rel="stylesheet" href="https://unpkg.com/patternfly/dist/css/patternfly.min.css"&gt;
      &lt;link rel="stylesheet" href="https://unpkg.com/patternfly/dist/css/patternfly-additions.min.css"&gt;
      &lt;link rel="stylesheet" href="https://unpkg.com/c3/c3.min.css"&gt;
      &lt;link rel="stylesheet" href="https://unpkg.com/vue-patternfly/dist/vue-patternfly.css"&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;pf-layout id="app"&gt;&lt;/pf-layout&gt;

      &lt;script src="https://unpkg.com/d3/d3.min.js"&gt;&lt;/script&gt;
      &lt;script src="https://unpkg.com/c3/c3.min.js"&gt;&lt;/script&gt;
      &lt;script src="https://unpkg.com/vue/dist/vue.min.js"&gt;&lt;/script&gt;
      &lt;script src="https://unpkg.com/vue-router/dist/vue-router.min.js"&gt;&lt;/script&gt;
      &lt;script src="https://rawgithub.com/yuche/vue-strap/071995989df214c149f5f74a27872d67daa81a10/dist/vue-strap.min.js"&gt;&lt;/script&gt;
      &lt;script src="https://unpkg.com/vue-patternfly/dist/vue-patternfly.js"&gt;&lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h3>JavaScript</h3>
    <pre><code class="lang-javascript">// If using a module system, import Vue and VuePatternfly and call Vue.use(VuePatternfly).

const app = new Vue({
  el: '#app'
})</code></pre>
  </section>
</article>
</template>

<script>
export default {
  name: 'get-started-page',
};
</script>
