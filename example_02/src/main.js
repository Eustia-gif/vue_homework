import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 在你的 main.js 或者 app.js 文件中
import MyComponent from './components/MyComponent.vue';

// 全局注册组件
Vue.component('my-component', MyComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')
