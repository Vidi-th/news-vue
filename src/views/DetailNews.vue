<template>
    <div>
        <button @click = "backTo">Back</button>
        <div v-if="news">
            <img :src="news.urlToImage">
            <h1>{{ news.title }}</h1>
            <div id="keterangan">
                <p>{{ news.author }}</p>
                <p>{{ news.publishedAt }}</p>
            </div>
            <p>{{ news.description }}</p>
            <div id="link">
                Lanjutan baca terdapat di link:
                <a :href=news.url>Sini</a>
            </div>
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
img {
    width: 100%;
}

#keterangan {
    display: flex;
    place-content: space-between;
    margin: 0 12px;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: left;
}

#link {
    text-align: left;
}
</style>