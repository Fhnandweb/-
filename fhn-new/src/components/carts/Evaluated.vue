<template>
  <div class="evaluated">
    <h2>待付款</h2>
    <noSomething />
  </div>
</template>

<script>
import noSomething from './Nosomething.vue'
export default {
  name: 'evaluated',
  data () {
    return {

    }
  },
  components: {
    noSomething
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
