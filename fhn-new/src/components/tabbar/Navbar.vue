<template>
  <div class="app-navbar">
    <mt-header title="微阅">
      <router-link to=""
                   slot="left">
        <mt-button @click="handleClick"
                   icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more"
                 slot="right"></mt-button>
    </mt-header>
    <p style="margin-top:48px"></p>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.mint-header {
  height: 46px;
  width: 100%;
  background: rgb(255, 91, 72);
  position: fixed;
  top: 0;
  z-index: 199;
}
</style>
