<template>
  <div class="goodsComment">
    <div style="padding:0 15px">
      <hr>
    </div>
    <h2 style="padding:15px 15px;color:#f00">
      微阅自营
      <van-icon name="hot" />
    </h2>
    <div class="comment">
      <span>评价</span>
      <span>好评率 99%</span>
      <span>共 2000+ 条 ></span>
    </div>
    <div class="comment-c">
      <van-button class="rbtn"
                  size="small">好评(1500+)</van-button>
      <van-button class="rbtn"
                  size="small">中评(20+)</van-button>
      <van-button class="rbtn"
                  size="small">差评(10+)</van-button>
      <van-button class="rbtn"
                  size="small">有图(1600+)</van-button>
    </div>
    <div class="content"
         v-for="item in 4">
      <p><span>路飞</span>
        <span>★★★★★</span>
      </p>
      <p>东西比较nice！</p>
    </div>
    <p class="p-btn">
      <van-button plain
                  round
                  type="warning">查看全部</van-button>
    </p>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'goodsComment',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.msale,
.sl-addr,
.s-addr,
.comment,
.content {
  width: 100%;
  padding: 10px 10px;
}
hr {
  background: #ddd;
  height: 1px;
  border: 0;
}
.comment {
  border-top: 25px solid #e8e8ed;
  border-bottom: 2px solid #e8e8ed;
  margin-bottom: 10px;
}
.comment span {
  display: inline-block;
}
.comment span:first-child {
  width: 10%;
  font-size: 16px;
}
.comment span:nth-child(2) {
  width: 60%;
  color: #f00;
  font-weight: bold;
}
.comment span:nth-child(3) {
  width: 25%;
}
.rbtn {
  background-color: rgba(255, 154, 110, 0.6);
  border: 0;
}
.comment-c {
  padding: 10px 20px;
}
.content {
  border-bottom: 1px solid #ddd;
}
.content p {
  margin: 0 5px;
  padding: 3px 0;
}
.content p:first-child span:first-child {
  color: #999;
}
.content p:first-child span:nth-child(2) {
  color: #f00;
}
.p-btn {
  text-align: center;
}
.p-btn > .van-button {
  width: 200px;
  height: 40px;
}
</style>
