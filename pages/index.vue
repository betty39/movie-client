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
          movieid: 318,
          moviename: "The Shawshank Redemption",
          averating: 4.,
          description: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
          typelist: "Drama,Crime",
          backpost: "http://image.tmdb.org/t/p/w780/xBKGJQsAIeweesB79KC89FpBrVr.jpg"
        },
        {
          movieid: 356,
          moviename: "Forrest Gump",
          averating: 4.1,
          description: "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",
          typelist: "Comedy,Drama,Romance",
          backpost: "http://image.tmdb.org/t/p/w780/4fT3pmeO7NnyT1TBkSElIDhVThU.jpg"
        },
        {
          movieid: 296,
          moviename: "Pulp Fiction",
          averating: 4.2,
          description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
          typelist: "Thriller,Crime",
          backpost: "http://image.tmdb.org/t/p/w780/9rZg1J6vMQoDVSgRyWcpJa8IAGy.jpg"
        },
        {
          movieid: 593,
          moviename: "The Silence of the Lambs",
          averating: 4.2,
          description: "FBI trainee, Clarice Starling ventures into a maximum-security asylum to pick the diseased brain of Hannibal Lecter, a psychiatrist turned homicidal cannibal. Starling needs clues to help her capture a serial killer. But her Faustian relationship with Lecter soon leads to his escape, and now two deranged killers are on the loose.",
          typelist: "Crime,Drama,Thriller",
          backpost: "http://image.tmdb.org/t/p/w780/1ewiz2BOytcyE90ozbaiDDZn8ma.jpg",
        },
        {
          movieid: 2571,
          moviename: "The Matrix",
          averating: 4.2,
          description: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
          typelist: "Action,Science Fiction",
          backpost: "http://image.tmdb.org/t/p/w780/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
        }
      ],
    }
  },
}
</script>

<style>

</style>
