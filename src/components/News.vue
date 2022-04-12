<template>
    <div>
        <li v-for="(newsList,index) in news" :key=index>
            {{ newsList.author }}<br>
            {{ newsList.title }}<br>
            {{ newsList.publishedAt }}<br><br>
        </li>
    </div>
</template>

<script>
export default {
    name:"News",
    computed: {
        news() {
        return this.$store.state.newsAPI;
        }
    },
    mounted () {
        this.$store.dispatch('fetchNewsList');
    }
}
</script>

<style scoped>

</style>