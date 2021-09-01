import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue")
  },
  {
    path: "/page1",
    name: "Page1",
    component: () => import("./views/Page1.vue"),
    children: [
      {
        path: "/page1/child1",
        name: "child10",
        component: () => import("./views/Child.vue")
      },
      {
        path: "/page1/child2",
        name: "child20",
        component: () => import("./views/Child.vue")
      },
      {
        path: "/page1/child3",
        name: "child30",
        component: () => import("./views/Child.vue")
      }
    ]
  },
  {
    path: "/page2",
    name: "Page2",
    component: () => import("./views/Page2.vue")
  },
  {
    path: "/page3",
    name: "Page3",
    component: () => import("./views/Page2.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
