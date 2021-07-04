import Vue from 'vue'
import VueRouter from 'vue-router'

//解决重复跳转路由
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};


//使用Vue.use()注册
Vue.use(VueRouter)
const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')
const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/catagory',
    component: Category
}, {
    path: '/cart',
    component: Cart
}, {
    path: '/home',
    component: Home
}, {
    path: '/profile',
    component: Profile
}]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router