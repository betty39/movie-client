<template>
<div>
  <Home
    :hotList = hotList
  ></Home>
</div>
</template>

<script>
import Home from '~/components/index.vue'

export default {
  components: {
    Home
  },
  data() {
    return {
      hotList: [
        {
          movieid: 1,
          moviename: "Toy Story",
          averating: 3.0,
          description: "testtest",
          typelist: "codsdfa",
          backpost: "http://image.tmdb.org/t/p/w780/1ENbkuIYK2taNGGKNMs2hw6SaJb.jpg"
        },
        {
          movieid: 1,
          moviename: "Toy Story",
          averating: 3.0,
          description: "testtest",
          typelist: "codsdfa",
          backpost: "http://image.tmdb.org/t/p/w780/y6A4PUAD61r15CgtuuQhWxLh6Vx.jpg"
        },
        {
          movieid: 1,
          moviename: "Toy Story",
          averating: 3.0,
          description: "testtest",
          typelist: "codsdfa",
          backpost: "http://image.tmdb.org/t/p/w780/fkxHaPJaB35wnoUC7glF16W3lWH.jpg"
        }
      ],
    }
  },
}
</script>

<style>

</style>
