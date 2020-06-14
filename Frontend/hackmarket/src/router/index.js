import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { isLoggedIn } from '../api/utils'
import { checkAdmin } from '../api/utils'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      allowAnonymous: false//ruta privada
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'), // si se hace asi no se importa arriba
    meta: {
      allowAnonymous: false //ruta privada
    }
  },
  {
    path: '/new-user',
    name: 'NewUser',
    component: () => import('../views/Registrer.vue'), // si se hace asi no se importa arriba
    meta: {
      allowAnonymous: true
    }
  },
  {
  path: '/add-client',
  name: 'AddClient',
  component: () => import('../views/AddClient.vue'),
  meta: {
    allowAnonymous: false,
    allowNoAdmin: false  //ruta solo para admins
  },
  beforeEnter: (to, from, next) => {
    if(to.meta.allowNoAdmin === false && !checkAdmin()) {
      next({
        path: '/home',
        query: { redirect: to.fullPath }
      })
  } else {
    next()
  }
}
},
{
  path: '/',
  name: 'Login',
  component: () => import('../views/Login.vue'),
  meta: {
    allowAnonymous: true //ruta publica
  }
},
{
  path: '/products',
  name: 'Products',
  component: () => import('../views/Home.vue'),
  meta: {
    allowAnonymous: false //ruta privada
  }
},
{
  path: '/clients',
  name: 'Clients',
  component: () => import('../views/Clients.vue'),
  meta: {
    allowAnonymous: false,
    allowNoAdmin: false  //ruta solo para admins
  },
  beforeEnter: (to, from, next) => {
    if(to.meta.allowNoAdmin === false && !checkAdmin()) {
      next({
        path: '/home',
        query: { redirect: to.fullPath }
      })
  } else {
    next()
  }
}
},
{
  path: '/*',
  name: 'Error',
  component: () => import( '../views/Error.vue')
}
]

const router = new VueRouter({
  routes
})

// COMPROBANDO CADA PAGINA POR SI LA PERSONA ESTÁ LOGUEADA
router.beforeEach((to, from, next) => {
  // Si la ruta es privada la persona no tiene token
  if(!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
