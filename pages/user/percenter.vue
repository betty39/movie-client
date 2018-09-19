<template>
  <div>
    <movheader></movheader>
    <percenter></percenter>
  </div>
</template>

<script>
  import percenter from '~/components/percenter.vue'
  import movheader from '~/components/header.vue'

  export default {
    components: {
      percenter,movheader
    },
    data() {
      return {
      }
    },
  }
</script>

<style>

</style>
