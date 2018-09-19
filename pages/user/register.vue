<template>
  <div>
    <Login
      :type = type
    ></Login>
  </div>
</template>

<script>
  import Login from '~/components/Login.vue'

  export default {
    components: {
      Login
    },
    data() {
      return {
        type: "register",
      }
    },
  }
</script>

<style>

</style>
