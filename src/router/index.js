import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login/Login.vue"
import Register from "@/views/register/Register.vue"
import Dashboard from "@/views/dashboard/Dashboard.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: "/login",
  },
  {
    path: "/login",
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
