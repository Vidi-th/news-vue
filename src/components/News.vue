<template>
    <div>
    <span v-if="errorMessage">Gagal ambil data</span>

    <li v-for="(newsList,index) in news" :key=index>
        <img :src="newsList.urlToImage">
        <div>
            {{ newsList.author }}<br>
            {{ newsList.title }}<br>
            {{ newsList.publishedAt }}<br><br>
        </div>
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
    errorMessage() {
      if (this.$store.state.news.error !== "") {
        return true
      }
      return false
    },
    mounted () {
        this.$store.dispatch('fetchNewsList');
    },
};

</script>

<style scoped>
ul {
  text-align: left;
}

img {
  max-width: 200px;
}

li {
  margin: 50px 0;
}

</style>