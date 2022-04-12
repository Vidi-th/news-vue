import Vue from "vue";
import VueRouter from "vue-router";
import News from "@/views/NewsView.vue";
import DetailNews from "@/views/DetailNews.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "News",
        component: News,
        // children: [
        //     {
        //         path: "",
        //         name: "News",
        //         component: News,
        //     },
        //     {
        //         path: "/:title",
        //         name: "News Detail",
        //         component: DetailNews,
        //     },
        // ],
    },
    {
        path: "/Detail/:title",
        name: "Detail",
        component: DetailNews,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;

