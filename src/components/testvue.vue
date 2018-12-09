<template>
   <div>
      <br>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <h1>{{ message }}</h1>
      <h2>essential links</h2>
     <el-button type="info">信息按钮</el-button>
    </div>


</template>

<script>
  export default {
    name: 'testvue',
    data () {
      return {
        message: 'welcome to my test vue project'
      }
    }
  }
</script>

<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  ul{
    list-style: none;
    padding:0
  }
  a{
    color: darkblue;
  }

  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
