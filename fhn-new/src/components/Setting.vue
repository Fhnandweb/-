<template>
  <div class="app-setting">
    <mnav></mnav>

    <mt-cell title="账号与安全"
             to="//github.com"
             is-link>
    </mt-cell>
    <div class="p-card">
      <mt-cell title="隐私"
               to="//github.com"
               is-link>
      </mt-cell>
      <mt-cell title="通用"
               to="//github.com"
               is-link>
      </mt-cell>
      <mt-cell title="设置"
               to="//github.com"
               is-link>
      </mt-cell>
    </div>
    <mt-cell title="关于"
             to="//github.com"
             is-link>
    </mt-cell>
    <div class="set-b">
      <van-button size="large"
                  type="danger">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.p-card {
  margin: 20px 0;
}
.set-b {
  padding: 30px 0;
}
.set-top {
  /* margin-top: 20px; */
}
.mint-cell {
  border-bottom: 1px solid #eee;
}
</style>
