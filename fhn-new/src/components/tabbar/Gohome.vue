<template>
  <div class="app-gohome">
    <!--  -->
    <div class="toHome"
         @click="handleHome">
      <mu-button fab
                 color="rgba(255,0,0,.6)">
        <van-icon name="home-o"
                  size="25px" />
      </mu-button>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'gohome',
  data () {
    return {

    }
  },
  methods: {
    handleHome () {
      this.$router.push("/")
      this.$store.commit('saveactive', 0)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.toHome {
  position: fixed;
  bottom: 200px;
  right: 10px;
  opacity: 1;
  z-index: 100;
}
</style>
