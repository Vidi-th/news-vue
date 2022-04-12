<template>
    <div>
        <button @click = "backTo">Back</button>
        <div v-if="news">
            <img :src="news.urlToImage">
            <h1>{{ news.title }}</h1>
            <p>{{ news.author }}</p>
            <p>{{ news.publishedAt }}</p>
            <p>{{ news.desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        backTo() {
            this.$router.go(-1);
        },
    },
    computed: {
        news() {
            return this.$store.getters.news(this.$route.params.title);
        },
    },
}

</script>

<style scoped>

</style>