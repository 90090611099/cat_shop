<template>
  <div id="app">
    <div id="nav">
     <NavBar/>
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
 components: {
   NavBar
 } 
}
</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:75%;
  margin-left:auto;
  margin-right: auto
}
#nav {
 
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul,li {
    list-style-type: none;
  }
</style>
