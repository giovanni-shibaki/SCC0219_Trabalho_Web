import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home2",
    component: HomeView,
  },
  {
    path: "/catalogue",
    name: "catalogue",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "catalogue" */ "../views/CatalogueView.vue"),
  },
  {
    path: "/signinup",
    name: "signinup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "loginup" */ "../views/SignInUpView.vue"),
  },
  {
    // Aqui, está sendo enviado o ID do card selecionado junto
    // Para pegar seu valor basta usar $route.params.id
    // Lembrar de dar parseInt(), pois virá como string
    path: "/item-page",
    name: "itemPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "item-page" */ "../views/ItemPageView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/CartView.vue"),
  },
  {
    path: "/payment",
    name: "payment",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "payment" */ "../views/PaymentView.vue"),
  },
  {
    path: "/card-of-the-day",
    name: "cardOfTheDay",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "card-of-the-day" */ "../views/CardOfTheDayView.vue"
      ),
  },
  {
    path: "/admin-page",
    name: "adminPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "admin-page" */ "../views/AdminPageView.vue"),
  },
  {
    path: "/edit-card",
    name: "editCard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "admin-page" */ "../views/EditCardView.vue"),
  },
  {
    path: "/change-info",
    name: "changeInfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "admin-page" */ "../views/ChangeInfoView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
