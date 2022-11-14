<template>
  <div id="app">
    <nav id="nav">
      <template v-if="isConnected">
        <router-link to="/">Home</router-link>
      </template>
      <template v-else>
        <router-link to="/signin">Inscription</router-link> | 
        <router-link to="/login">Connexion</router-link>
      </template>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import loginStore from '@/store/login'

export default {
  data() {
    return {
      loginStore,
    }
  },
  computed: {
    isConnected() { 
      return !!loginStore.token
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
