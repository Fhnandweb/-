<template>
  <div class="app-toTop">
    <div class="toTop"
         @click="handleTop">
      <mu-button fab
                 color="rgba(255,0,0,.6)">
        <van-icon name="arrow-up"
                  size="25px" />
      </mu-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toTop',
  data () {
    return {

    }
  },
  methods: {
    goTop () {
      window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop ||
          document.body.scrollTop;
        // console.log(scrollTop);
        if (scrollTop >= 100) {
          // document.getElementsByClassName("toTop")[0].style.opacity = '1'
          $(".toTop").css("opacity", "1");
        } else {
          // document.getElementsByClassName("toTop")[0].style.opacity = '0'
          $(".toTop").css("opacity", "0");
        }
      }, true);
    },
    handleTop () {
      $("body").scrollTop(0)
      // document.body.scrollTo(0, 0) || document.documentElement.scrollTo(0, 0)

    }
  },
  created () {

  },
  mounted () {
    this.goTop()
  }
}
</script>

<style scoped>
.toTop {
  position: fixed;
  bottom: 140px;
  right: 10px;
  opacity: 0;
  z-index: 100;
}
</style>
