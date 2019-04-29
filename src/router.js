import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/index.vue'
import People from './components/PeopleComponet'
import PeopleId from './components/ProfileComponent'
import Film from './components/FilmComponent'
import Planet from './components/PlanetComponent'
import Form from './views/FormValidation'
import Succes from './views/SuccessForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/people',
      component: Home,
      children: [
        {
          path: '/people',
          name: 'people',
          component: People
        },
        {
          path: '/people/:id',
          name: 'peopleId',
          component: PeopleId
        }, {
          path: '/film',
          name: 'film',
          component: Film
        },
        {
          path: '/planet',
          name: 'planet',
          component: Planet
        }
      ]
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    }, {
      path: '/succes',
      name: 'Succes',
      component: Succes
    }
  ]
})
