<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  height: 100%;
} */
html,
body {
  /* background: #fafafa; */
  background: #fff;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
</style>
