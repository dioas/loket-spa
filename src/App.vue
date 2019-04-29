<template>
  <div>
    <div id="app">
      <router-view/>
    </div>
    <SnackbarNotf/>
  </div>
</template>
<script>
import SnackbarNotf from '@/components/SnackbarNotification'
export default {
  components: {
    SnackbarNotf
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-menu .v-menu__content.menuable__content__active {
  top:0 !important;
  left: 0 !important;
}
</style>
