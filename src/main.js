import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import PrismicVue from 'prismic-vue';
import linkResolver from './link-resolver';

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
