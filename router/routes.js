import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DetailPage from "../views/DetailPage.vue";

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/question/:id",
      component: DetailPage,
    },
  ],
});

export default router;
