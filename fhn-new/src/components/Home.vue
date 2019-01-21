<template>
  <div class="app-home">
    <!-- 头 -->
    <div class="mnav">
      <div class="mnav-left">
        <van-icon name="orders-o" />
        <span>微阅</span>
      </div>
      <ul>
        <li style="color:green">历史</li>
        <li style="color:#FFEB3B">传记</li>
        <li style="color:#3F51B5">随笔</li>
      </ul>
    </div>
    <!--  -->
    <p style="margin-top:46px"></p>
    <!--下拉刷新  -->
    <van-pull-refresh v-model="isLoading"
                      @refresh="onRefresh">
      <!--  -->
      <h3>经典书籍
        <van-icon name="fire"
                  color="red" />
      </h3>

      <!--  -->
      <hotbook />
      <!--  -->
    </van-pull-refresh>
    <!--  -->
    <h3>经典影视
      <van-icon name="fire"
                color="red" />
    </h3>
    <!--  -->
    <hotmovie />
    <!--  -->
    <h3 style="border:0">读来看去</h3>
    <!--  -->
    <bookbtn />
    <!--  -->
    <h3>分类浏览</h3>
    <!--  -->
    <hfoot />
    <!--  -->
    <totop />
    <!--  -->

    <!--  -->
  </div>
</template>

<script>
import hotbook from './tabbar/Hotbook.vue'
import hotmovie from './tabbar/Hotmovie.vue'
import hfoot from './tabbar/Homefoot.vue'
import bookbtn from './tabbar/Buttnbook.vue'
// 
export default {

  name: 'Home',
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }

  },
  created () {

  },
  mounted () {

  },
  components: {
    hotbook,
    hotmovie,
    hfoot,
    bookbtn
  }
}
</script>

<style scoped>
.toTop {
  position: fixed;
  bottom: 140px;
  right: 10px;
  opacity: 0;
}
/*  */
.app-home {
  margin-bottom: 94px;
}
.van-rate {
  display: inline-block;
}
.van-icon {
  vertical-align: middle;
  height: 24px;
}
.mnav {
  height: 46px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: rgb(255, 91, 72);
  line-height: 46px;
  position: fixed;
  top: 0;
  z-index: 20;
}
.mnav-left {
  padding-left: 15px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  height: 46px;
  line-height: 46px;
}
.mnav ul li {
  float: left;
  width: 50px;
  font-weight: bold;
}
.mnav ul::after {
  content: "";
  display: block;
  clear: both;
}
/*  */
h3 {
  margin: 0;
  padding-left: 20px;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
}

/*  */
</style>
