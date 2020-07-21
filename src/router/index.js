import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import AdsIndex from "../views/AdsIndex.vue";
import AdsShow from "../views/AdsShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "hame",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/ads",
    name: "ads-index",
    component: AdsIndex,
  },
  {
    path: "/ads/:id",
    name: "ads-show",
    component: AdsShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
