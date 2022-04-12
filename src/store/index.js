import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);
const persistedDataState  = createPersistedState({
    paths: ["newsAPI"],
});

export default new Vuex.Store({
    plugins: [persistedDataState],
    state:{
        newsAPI: [],
        error: "",
    },
    mutations:{
        setNews(state, param) {
            state.newsAPI = param;
        },
        setError(state,param) {
            state.error = param;
        },
    },
    actions:{
        fetchNewsList(store) {
            axios
            .get(
                'https://newsapi.org/v2/everything?q=bitcoin&apiKey=217211cdb0054b4fb35c4574ddf62239'
            )
            .then((response) => {
                console.log("response: ", response);
                store.commit("setNews", response.data.articles);
            })
            .catch((error) => {
                console.log("error: ", error);
                store.commit("setError", error.msg);
            });
        },
    },
    getters:{

    },
})