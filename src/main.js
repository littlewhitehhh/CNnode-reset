import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 全局引入iconfont样式表
import './assets/css/iconfont.css'


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')