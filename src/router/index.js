import Vue from "vue";
import VueRouter from "vue-router";

import SignInPage from "../views/SignInPage";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signIn",
    component: SignInPage
  },
  {
    path: "/home",
    name: "home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
