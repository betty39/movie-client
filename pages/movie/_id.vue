<template>
<div>
  <movheader></movheader>
  <movdetail
    :moviedescription = "moviedescription">
  </movdetail>
</div>
</template>

<script>
import movdetail from '~/components/movdetail.vue'
import movheader from '~/components/header.vue'
import API from '../../api'

export default {
  components: {
    movdetail,movheader
  },
  asyncData (context) {
    let device = context.store.state.device;
    let id = context.params.id;

    return API.movieDescApi({
      movieid: id
    }, context).then(res => {
      return res;
    }).catch(msg => {
      context.error({ statusCode: 500, message: msg });
    })
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>
