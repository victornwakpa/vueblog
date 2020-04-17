import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueResource from 'vue-resource'

Vue.use(VueResource);

//Custom Directives
Vue.directive('rainbow',{
  bind(el){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

Vue.directive('theme', {
  bind(el, binding){
      if (binding.value == 'wide'){
          el.style.maxWidth = "1260px";
      } 
      
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
