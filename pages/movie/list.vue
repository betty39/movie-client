<template>
<div>
  <movheader></movheader>
  <movieselect></movieselect>
</div>
</template>

<script>
import movieselect from '~/components/movieselect.vue'
import movheader from '~/components/header.vue'

export default {
  components: {
    movieselect,movheader
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>
