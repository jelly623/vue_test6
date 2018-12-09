<template>
  <div>
    <h1>This is home page.</h1>
    <router-link id="firstpart" to="/home">First part</router-link>
    <router-link id="secondpart" to="/home/secondpart">Second part</router-link>
    <h1>home page</h1>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>

</style>
