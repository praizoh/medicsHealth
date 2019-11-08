import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import addPatient from './views/addPatient.vue'
import viewPatient from './views/viewPatient.vue'
import fullView from './views/fullView.vue'
import editView from './views/editView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // Relative to /src/views
      name:'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/addPatient',
      name: 'addPatient',
      component: addPatient
    },
    {
      path: '/viewPatient',
      name: 'viewPatient',
      component: viewPatient
    },
    {
      path: '/patientView',
      name: 'fullView',
      component: fullView
    },
    {
      path: '/editPatient',
      name: 'editView',
      component: editView
    },
   
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
