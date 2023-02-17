import Home from '@/pages/Home/Home.vue';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import ShopCart from '@/pages/ShopCart';
import AddCartSuccess from '@/pages/AddCartSuccess';
import Pay from '@/pages/Detail';
import PaySuccess from '@/pages/PaySuccess';
import Trade from '@/pages/Trade';
import Center from '@/pages/Center';

export const routes = [
  {
    path: '/home',
    component: Home,
    meta: {flag: true}
  },
  {
    path: '/login',
    component: Login,
    meta: {flag: false}
  },
  {
    path: '/register',
    component: Register,
    meta: {flag: false}
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: {flag: true},
    name: 'search'
  },
  {
    path: '/detail/:skuId',
    component: Detail,
    meta: {flag: true}
  },
  {
    path: '/addcartsuccesss/:skuNum',
    component: AddCartSuccess,
    meta: {flag: true},
    name: 'success'
  },
  {
    path: '/shopcar',
    component: ShopCart,
    meta: {flag: true}
  },
  {
    path: '/pay',
    component: Pay,
    meta: {flag: true},
    name: '支付'
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: {flag: true},
    name: '支付成功'
  },
  {
    path: '/trad',
    component: Trade,
    meta: {flag: true},
    name: '我的订单'
  },
  {
    path: '/center',
    component: Center,
    meta: {flag: true},
    name: '个人中心'
  },
  {
    path: '/',
    redirect: '/home'
  }
]