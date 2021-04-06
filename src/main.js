import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

// import  VueResource  from 'vue-resource'
// import {VueJsonp} from 'vue-jsonp'

// Vue.use(VueJsonp)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
// Vue.use(VueResource)


Vue.config.productionTip = false
import 'assets/css/bootstrap.min.css'
import 'assets/css/font-awesome.min.css'
import 'assets/css/animate.css'
import 'assets/css/swiper.css'
import 'assets/css/owl.carousel.min.css'
import 'assets/css/style.css'
import 'assets/css/responsive.css'
import 'assets/css/magnific-popup.css'




new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

// import {getToken} from './auth'

// 判断路由登录状态
// router.beforeEach((to, from, next) => {
//   if (to.meta.Login) {
//     //  页面需要登录后访问
//     if (window.sessionStorage.getItem("user")) {
//       next() // 表示已经登录
//     } else {
//       next({
//         name: 'login'
//       })
//       // alert('Error username or password!');
//
//     }
//   } else {
//     next()
//   }
// })


