<template>
<div>
  <movheader></movheader>
  <movdetail></movdetail>
</div>
</template>

<script>
import movdetail from '~/components/movdetail.vue'
import movheader from '~/components/header.vue'

export default {
  components: {
    movdetail,movheader
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>
