import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/Home.page.vue";
import EmptyRouterView from "../views/EmptyRouterView.page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.page.vue")
  },
  {
    path: "/elements",
    component: EmptyRouterView,
    children: [
      {
        name: "ElementsPage",
        path: "",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Elements.page.vue")
      },
      {
        path: "inputs",
        name: "InputsPage",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/elements/Inputs.page.vue")
      },
      {
        path: "buttons",
        name: "ButtonsPage",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/elements/Buttons.page.vue")
      }
    ]
  }
];


const router = new VueRouter({
  mode: "history",
  routes
});


export default router;
