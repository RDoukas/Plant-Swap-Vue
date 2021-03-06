import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
// import Login from "../views/Login.vue";
import About from "../views/About.vue";
import Logout from "../views/Logout.vue";
import AdsNew from "../views/AdsNew.vue";
import AdsIndex from "../views/AdsIndex.vue";
import AdsShow from "../views/AdsShow.vue";
import UsersShow from "../views/UsersShow.vue";
import ConversationsIndex from "../views/ConversationsIndex.vue";
import ConversationsShow from "../views/ConversationsShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "hame",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: Login,
  // },
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
    path: "/ads/new",
    name: "ads-new",
    component: AdsNew,
  },
  {
    path: "/ads/:id",
    name: "ads-show",
    component: AdsShow,
  },
  {
    path: "/users/",
    name: "users-show",
    component: UsersShow,
  },
  {
    path: "/conversations",
    name: "conversations-index",
    component: ConversationsIndex,
  },
  {
    path: "/conversations/:id",
    name: "conversations-show",
    component: ConversationsShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
