<template>
  <div class="app-index">

    <router-view></router-view>

    <!--  -->
    <van-tabbar v-model="active"
                active-color="#07c160">
      <van-tabbar-item icon="home-o"
                       to="/">首页
      </van-tabbar-item>
      <van-tabbar-item icon="search"
                       to="/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o"
                       to="/prifile">我的</van-tabbar-item>
      <van-tabbar-item icon="setting-o"
                       to="/setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import navbar from './tabbar/Navbar.vue'

export default {
  name: 'Index',
  data () {
    return {
      active: 0
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.van-tabbar {
  height: 90px;
  border-top: 1px solid #ccc;
}
.van-tabbar-item {
  font-size: 16px;
}
</style>
