import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

//// TESTING JUNK/////////////////////////////////////
import mygamep from './sandbox';
mygamep.then((r) => {
  console.log(r);
});
/////////////////////////////////////////////////////

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');




