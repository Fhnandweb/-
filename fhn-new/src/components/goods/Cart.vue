<template>
  <div class=app-cart>
    <mnav />
    <ul class="menu">
      <li @click="handleOrder">
        <span>
          <van-icon name="orders-o"
                    size="40px" /></span>
        <span>全部订单</span>
      </li>
      <li @click="handleEval">
        <span>
          <van-icon name="bill-o"
                    size="40px" /></span>
        <span>代付款</span>
      </li>
      <li @click="handlePay">
        <span>
          <van-icon name="shop-o"
                    size="40px" /></span>
        <span>待收货</span>
      </li>
      <li @click="handleRec">
        <span>
          <van-icon name="records"
                    size="40px" /></span>
        <span>待评价</span>
      </li>
    </ul>
    <p style="width:100%;height:20px;background:#eee;margin:0"></p>
    <!--  -->
    <router-view></router-view>
    <!--  -->
    <tohome />
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {

    }
  },
  methods: {
    handleOrder () {
      this.$router.push('/order')
    },
    handleEval () {
      this.$router.push('/evaluated')
    },
    handlePay () {
      this.$router.push('/payment')
    },
    handleRec () {
      this.$router.push('/receiving')
    }
  }
}
</script>

<style scoped>
.menu {
  width: 100%;
  display: flex;
}
.menu li {
  width: 25%;
  height: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.menu li span {
  height: 50%;
  text-align: center;
}
.menu li span:nth-child(2) {
  padding: 5px;
  border-bottom: 1px solid #f00;
}
</style>
