<template>
  <div class="goods-detail">
    <mnav></mnav>
    <!-- 轮播和简介 -->
    <showgoods />
    <!--  -->
    <spec />
    <!--  -->
    <comment />
    <!--  详细介绍-->
    <moredes />
    <!--  -->
    <!-- 底部 -->
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o"
                                 text="客服" />
      <van-goods-action-mini-btn info="0"
                                 icon="cart-o"
                                 text="购物车" />
      <van-goods-action-mini-btn icon="like-o"
                                 text="收藏" />
      <van-goods-action-big-btn text="加入购物车" />
      <van-goods-action-big-btn primary
                                text="立即购买" />
    </van-goods-action>
    <!--  -->
    <totop />

  </div>
</template>

<script>
//
import showgoods from './ShowGoods.vue'
import spec from './Spec.vue'
import comment from './GoodComment.vue'
import moredes from './MoreDetails.vue'
export default {
  name: 'detail',
  data () {
    return {
    }
  },
  methods: {

  },
  components: {
    showgoods,
    spec,
    comment,
    moredes
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
h3,
h4 {
  margin: 5px 0;
  padding: 0 8px;
}
h3.bigtitle {
  font-size: 18px;
}
.h3-text {
  color: #f00;
}
html {
  background: #aaa;
}
.van-goods-action {
  z-index: 100;
}
</style>
