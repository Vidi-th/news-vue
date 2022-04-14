import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);
const persistedDataState  = createPersistedState({
    paths: ["newsAPI", "kategori"],
});

export default new Vuex.Store({
    plugins: [persistedDataState],
    state:{
        newsAPI: [],
        error: "",
        title:"",
        kategori:"sports",
        searchQ:"",
    },
    mutations:{
        setKategori(state, param) {
            state.kategori = param;
        },
        setNews(state, param) {
            state.newsAPI = param;
        },
        setError(state,param) {
            state.error = param;
        },
        setSearch(state, param) {
            state.searchQ = param;
        },
    },
    actions:{
        fetchNewsList(store) {
            axios
            .get(
                'https://newsapi.org/v2/top-headlines?country=id&category=' + 
                store.state.kategori + 
                '&q=' + 
                store.state.searchQ + 
                '&apiKey=217211cdb0054b4fb35c4574ddf62239'
                
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

        updateNewsList(store, payload) {
            store.commit('setKategori', payload);
            store.dispatch('fetchNewsList');
        },

        searchNewsList(store, payload) {
            store.commit('setSearch', payload);
            store.dispatch('fetchNewsList');
            store.commit('setSearch', "");
        }
    },
    getters:{
        news: state => title => {
            return state.newsAPI.find(news => news.title === title);
        }
    },
})