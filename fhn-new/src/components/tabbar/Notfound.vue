<template>
  <div class="notfound">
    <h2>404 页面开发中...</h2>
    <div class="imgcon">
      <img :src="notfound"
           alt="">
    </div>
    <h3 @click="jump">
      返回上一页 >>
    </h3>
  </div>
</template>

<script>
import notfound from '../../assets/404/404.jpg';
export default {
  name: 'notfound',
  data () {
    return {
      notfound: notfound
    }
  },
  methods: {
    jump () {
      console.log(this.$store.state.active)
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 150px 0 0 0;
  padding: 10px 20px;
  font-size: 25px;
}
h3 {
  padding: 10px 20px;
}
.notfound {
  height: 100%;
}
.imgcon {
  width: 100%;
  height: 100%;
}
.imgcon > img {
  width: 100%;
}
</style>
