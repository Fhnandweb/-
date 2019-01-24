<template>
  <div class="app-profile">
    <mnav></mnav>
    <van-notice-bar mode="closeable">
      {{info}}
    </van-notice-bar>
    <!--  -->
    <router-view></router-view>
    <!--  -->
  </div>
</template>

<script>
import { Toast } from "vant"
import { mapState } from 'vuex'
export default {
  name: 'profile',
  data () {
    return {
      info: "今日部分地区大雪快递可能延误!今日部分地区大雪快递可能延误!",
    }
  },
  methods: {
  },
  created () {

  },
  computed: {

  }
}

</script>

<style scoped>
/* .mflex {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  padding: 5px;
}
.mflex span {
  display: inline-block;
  width: 33%;
  height: 110px;
  line-height: 40px;
  padding: 10px;
  background: rgb(255, 100, 82);
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
} */
/* b {
  display: block;
  font-size: 40px;
}
a {
  color: #000;
} */
/*  */
/* .mu-card-text {
  margin: 10px auto;
}
.mu-avatar {
  width: 80px !important;
  height: 80px !important;
}
.mu-card-header-title {
  padding-top: 10px;
}
.mu-card-header-title .mu-card-title {
  font-size: 20px;
}
.mu-card-header-title .mu-card-sub-title {
  font-size: 16px;
}
.mu-demo-form {
  width: 100%;
  max-width: 460px;
} */
</style>
