<template>
  <div class="app-setting">
    <mnav></mnav>
    <div class="mcontainer">
      <div>
        <router-link to="/notfound">
          <span>账号与安全</span>
          <span>></span>
        </router-link>
      </div>
      <ul>
        <li>
          <router-link to="/notfound">
            <span>隐私</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/notfound">
            <span>通用</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/notfound">
            <span>设置</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/notfound">
            <span>关于</span>
            <span>></span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="set-b">
      <van-button size="large"
                  @click="handleLogin"
                  type="danger">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  name: 'setting',
  data () {
    return {

    }
  },
  methods: {
    handleLogin () {

      if (this.$store.state.userinfo) {
        this.$store.commit('resetinfo', '')
        Toast.success({
          mask: true,
          duration: 500,
          message: '退出成功！'
        })
      } else {
        Toast.fail({
          mask: true,
          duration: 1000,
          message: '未登录！'
        })
      }

      // this.$store.commit('saveactive', 0)
      // this.$router.push('/')
      console.log(this.$store.state.active)


    }
  },
  created () {

  }
}
</script>

<style scoped>
.set-b {
  padding: 30px 0;
}
.mcontainer {
  padding: 10px 20px;
}
a {
  color: #000;
  display: flex;
  justify-content: space-between;
}
.mcontainer > div {
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.mcontainer li {
  padding: 10px 0;
  font-size: 15px;
  border-bottom: 1px solid #eee;
}
</style>
