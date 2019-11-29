import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie/index'
import Cinema from '../views/Cinema/index'
import Mine from '../views/Mine/index'
import City from '../components/City/City'
import NowPlaying from '../components/NowPlaying/NowPlaying'
import ComingSoon from '../components/ComingSoon/ComingSoon'
import Search from '../components/Search/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/movie'
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie,
    children: [{
      path: '/movie',
      redirect: '/movie/nowplaying'
    },{
      path: 'city',
      component: City
    }, {
      path: 'nowplaying',
      component: NowPlaying
    }, {
      path: 'comingsoon',
      component: ComingSoon
    }, {
      path: 'search',
      component: Search
    }]
  },
  {
    path: '/mine',
    name: 'about',
    component: Mine
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: Cinema
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
