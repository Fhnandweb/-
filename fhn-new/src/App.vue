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
