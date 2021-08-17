import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 全局引入iconfont样式表
import './assets/css/iconfont.css'
// 引入 markdonw语法样式
import './assets/css/markdown-github.css'


Vue.config.productionTip = false

// 格式化事件
Vue.filter('formatDate', function(str) {
    if (!str) return ''
    let date = new Date(str)
    let time = new Date().getTime() - date.getTime() // 现在的时间-传入的事件 = 相差的事件（单位毫秒）
    if (time < 0) {
        return ''
    } else if (time / 1000 < 30) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
    } else if (time / 60000 < 60) {
        return parseInt(time / 60000) + '分钟前'
    } else if (time / 3600000 < 24) {
        return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
    } else {
        return parseInt(time / 31536000000) + '年前'
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')