<template>
  <div class="app-index">
    <!--  -->

    <!--  -->
    <router-view></router-view>

    <!--  -->
    <van-tabbar v-model="active"
                active-color="#07c160">
      <van-tabbar-item @click="saveActivea"
                       icon="home-o"
                       to="/">首页
      </van-tabbar-item>
      <van-tabbar-item @click="saveActiveb"
                       icon="search"
                       to="/search">搜索</van-tabbar-item>
      <van-tabbar-item @click="saveActivec"
                       icon="friends-o"
                       to="/prifile">我的</van-tabbar-item>
      <van-tabbar-item @click="saveActived"
                       icon="setting-o"
                       to="/setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
      active: ''
    }
  },
  methods: {
    saveActivea () {
      this.$store.commit('saveactive', 0)
      // console.log(this.active)
    },
    saveActiveb () {
      this.$store.commit('saveactive', 1)
      // console.log(this.active)
    },
    saveActivec () {
      this.$store.commit('saveactive', 2)
      // console.log(this.active)
    },
    saveActived () {
      this.$store.commit('saveactive', 3)
      // console.log(this.active)
    },
  },
  created () {
    if (this.$store.state.active) {
      // console.log(11)
      this.active = this.$store.state.active
    } else {
      // console.log(22)
      this.active = 0
      this.$router.push('/')
    }
  },
  computed: {
    // ...mapState([
    //   active
    // ])
    // ...mapState({
    //   active: state => state.active
    // })
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
