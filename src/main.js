// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#aapp',//将会渲染index.html中的 id=app的div
  //控制的这个app是index.html中的那个id=app的div
   router,//'router':router 与上面的vouter导入
  components: {
    App
    // 'javaboy':App
  },//注册组件 一般用法是key value
  template:'<App/>'
  // template: '<javaboy/>'//用来代替div（id=app）的元素
  // template: '<h1>hello javaboy</h1>'//用来代替div（id=app）的元素
})
