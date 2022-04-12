<template>
    <div class="news">
        <h1>Berita Terkini</h1>
        <News/>
    </div>
</template>

<script>
import News from '@/components/News.vue'


export default {
    components:{
        News,
    },
}
</script>

<style>
.news:before, .news:after {
    display: block;
    content: "";
    clear: both;
  }
</style>