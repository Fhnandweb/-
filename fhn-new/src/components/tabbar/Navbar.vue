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
  background: rgb(255, 91, 72);
}
</style>
