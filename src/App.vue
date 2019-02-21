<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/css1">css1</router-link> |
      <router-link to="/css2">圣杯</router-link> |
      <router-link to="/css3">flex</router-link> |
      <router-link to="/css4">阴影</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%
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
</style>
