import Vue from 'vue'
import App from './App.vue'
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import TypeNav from '@/components/TypeNav/TypeNav.vue';

Vue.config.productionTip = false;

//注册全局组件
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(TypeNav.name, TypeNav);

// 引入路由
import router from './router';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
