import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/Home"
import City from "@/pages/city/City"
import Detail from "@/pages/detail/detail"
Vue.use(Router)
// 导出路由配置项
// @符号等于src
export default new Router({
  routes: [
    {
		path: '/',
		name: 'Home',
		component: Home
    }, {
    path: '/city',
		name: 'City',
		component: City
    }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
    }],
    scrollBehavior (to, from, savedPosition) {
        return { x:0,y:0}
    }
})
