<template>
  <div class="app-coupon">
    <mnav />
    <h2>优惠券中心</h2>
    <!--  -->
    <div class="coupon">
      <div>
        <p>新人专享优惠</p>
        <p>有效期至2019-12-31</p>
      </div>
      <div>
        <p>￥100</p>
        <router-link to="/detail/2">
          <p>去使用 ></p>
        </router-link>
      </div>
    </div>
    <!--  -->
    <tohome />
  </div>
</template>

<script>
export default {
  name: 'coupon',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
}
a {
  color: #fff;
}
.coupon {
  display: flex;
  padding: 10px 20px;
  margin: 0 20px;
  text-align: center;
  background: #fd7f95;
  height: 100px;
  color: #fff;
}
.coupon > div:first-child {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 20px;
  border-right: 1px solid #eee;
}
.coupon > div:first-child > p:first-child {
  font-size: 25px;
  height: 60%;
  border-bottom: 1px solid #eee;
}
.coupon > div:last-child {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.coupon > div:last-child > p:first-child {
  font-size: 25px;
  color: #f00;
  font-weight: bold;
}
</style>
