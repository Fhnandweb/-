<template>
  <div class="payment">
    <h2>待收货</h2>
    <noSomething />
  </div>
</template>

<script>
import noSomething from './Nosomething.vue'
export default {
  name: 'payment',
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
</style>
