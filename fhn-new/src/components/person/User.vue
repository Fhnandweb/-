<template>
  <div class="app-user">
    <div>
      <mu-container>
        <mu-card style="width: 100%;  margin: 20px auto;">
          <mu-card-header :title="titlename"
                          :sub-title="'账号：' +smname">
            <mu-avatar slot="avatar">
              <img :src="imgUrl">
            </mu-avatar>
          </mu-card-header>
        </mu-card>
        <!--  -->
      </mu-container>
      <div class="mcontainer">
        <div class="mflex">
          <span>
            <router-link to="/coupon">
              <b>
                <van-icon name="gem-o" /></b>优惠券
            </router-link>
          </span>
          <span>
            <router-link to="/order">
              <b>
                <van-icon name="orders-o" /></b>订单
            </router-link>
          </span>
          <span>
            <router-link to="/cart">
              <b>
                <van-icon name="shopping-cart-o" /></b>
              购物车
            </router-link>
          </span>
        </div>
        <div class="mflex">
          <span>
            <router-link to="/addr">
              <b>
                <van-icon name="location-o" /></b>收货地址
            </router-link>
          </span>
          <span>
            <router-link to="/user">
              <b>
                <van-icon name="like-o" /></b>收藏
            </router-link>
          </span>
          <span>
            <router-link to="/user">
              <b>
                <van-icon name="ellipsis" /></b>更多
            </router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant"
import { mapState } from 'vuex'
export default {
  name: 'user',
  data () {
    return {
      smname: 'wei12345',
      imgUrl: '../../static/imgs/b.png',
    }
  },
  created () {
    if (this.$store.state.userinfo) {
      this.$router.push('/user')
      // console.log(this.$store.state.userinfo)
    } else {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      titlename: state => state.userinfo.uname
    })
  }
}
</script>

<style scoped>
.mflex {
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
}
b {
  display: block;
  font-size: 40px;
}
a {
  color: #000;
}
/*  */
.mu-card-text {
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
}
</style>
