import Vue from "vue";
import Router from "vue-router";

import Index from "@/pages/index";
import Signup from "@/pages/signup";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        component: Index
      },
      {
        path: "/signup",
        component: Signup
      }
    ]
  });
}
