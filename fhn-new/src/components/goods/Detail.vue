<template>
  <div class="goods-detail">
    <mnav></mnav>
    <!-- 商品展示 -->
    <mu-carousel transition="fade">
      <mu-carousel-item v-for="item in list"
                        :key="item.id">
        <img :src="item">
      </mu-carousel-item>
    </mu-carousel>
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
  </div>
</template>

<script>
import pic0 from '../../assets/imgs/details/1-0.jpg';
import pic1 from '../../assets/imgs/details/1-1.jpg';
import pic2 from '../../assets/imgs/details/1-2.jpg';
import pic3 from '../../assets/imgs/details/1-3.jpg';
export default {
  name: 'detail',
  data () {
    return {
      list: [
        pic0,
        pic1,
        pic2,
        pic3
      ]
    }
  }
}
</script>

<style scoped>
.mu-carousel {
  height: 360px;
}
.mu-carousel-item {
  width: 100%;
}
.mu-carousel-item > img {
  height: 100%;
}
</style>
