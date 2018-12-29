<template>
  <div id="app">
    <el-container>
      <el-header>
        <mynavbar></mynavbar>
      </el-header>
      <el-container>
        <el-aside>
          <myaside></myaside>
        </el-aside>
        <el-container>
          <el-main>
            <mytestvue></mytestvue>
        <myfooter></myfooter>
          </el-main>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

</template>

<script>
  import navbar from './components/test_components/navbar'
  import footer from './components/test_components/footer'
  import aside from './components/test_components/aside'
  import testvue from './components/testvue'

export default {
  name: 'App',
  components: {
    'mynavbar': navbar,
    'myaside': aside,
    'mytestvue': testvue,
    'myfooter': footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
body{
  margin: 0px;
	padding: 0px;
  /* position: fixed */
}

</style>
