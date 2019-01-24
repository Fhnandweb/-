<template>
  <div class="noSomething">
    <h3>
      <van-icon name="info-o"
                color="#f00" />没有相关信息</h3>
  </div>
</template>

<script>
export default {
  name: 'noSomething',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.noSomething {
  width: 100%;
  height: 300px;
  margin: 30px auto;
  text-align: center;
  padding: 50px 20px;
  background: #eee;
}
</style>
