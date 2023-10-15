import { createRouter, createWebHistory } from "vue-router";
import Header from "@/components/Header.vue";
import Body from "@/components/Body.vue";

const routes = [
  {
    path: "/header",
    name: "Header",
    component: Header,
  },
  {
    path: "/body",
    name: "Body",
    component: Body,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
