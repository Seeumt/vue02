import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import javaboy from "../components/Javaboy";

Vue.use(Router)
//这里是一个路由表 大致意思就是每写好一个组件 都要在这个路由表里面注册 到时候会显示到<router-view/>上面去
export default new Router({
  routes: [
    {
      path: '/aaa',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/java',
      name: 'javaboy',
      component: javaboy
      //显示到App.Vue <router-view/>
      // <template>
      //   <div id="appp">
      // <!--    <img src="./assets/logo.png">-->
      //    <router-view/>
      //   </div>
      // </template>
    },

  ]
})
