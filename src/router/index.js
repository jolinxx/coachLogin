import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'//登录
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '*',
			name: 'login',
			component: Login
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
