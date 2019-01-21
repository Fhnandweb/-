<template>
  <div class="ShowGoods">
    <van-pull-refresh v-model="isLoading"
                      @refresh="onRefresh">
      <!-- 商品展示 -->
      <mu-carousel transition="fade"
                   :hide-controls=true>
        <mu-carousel-item v-for="item in list"
                          :key="item.id">
          <img :src="item">
        </mu-carousel-item>
      </mu-carousel>
      <!-- 商品介绍 -->
      <div class="sm-detail">
        <div class="sm-title">
          <h3 class="bigtitle">
            <van-icon name="medel"
                      size="20px"
                      style="color:#f00;" />{{titlelist[0].t}}</h3>
        </div>
        <h4 class="sm-content"
            v-mcolor="'red'">{{titlelist[0].c | textFilter}}</h4>
        <div class="sm-price">
          <h3 class="h3-text">￥{{titlelist[0].p | mfixed}}
            <van-icon name="fire" />
          </h3>
          <h4 style="text-decoration:line-through">定价：￥{{titlelist[0].op |mfixed}}</h4>
          <div v-mcolor:bgr>
            <span v-mcolor="'size'">自营放心购</span>
            <span>-破损报退换-闪电退款-上门换新</span>
          </div>
        </div>
      </div>
      <!--  -->
    </van-pull-refresh>
  </div>
</template>

<script>
import pic0 from '../../assets/imgs/details/1-0.jpg';
import pic1 from '../../assets/imgs/details/1-1.jpg';
import pic2 from '../../assets/imgs/details/1-2.jpg';
import pic3 from '../../assets/imgs/details/1-3.jpg';
export default {
  name: 'ShowGoods',
  data () {
    return {
      // 
      isLoading: false,
      // 
      list: [
        pic0,
        pic1,
        pic2,
        pic3
      ],
      titlelist: [
        {
          t: "1984（多一人读《1984》，就多了一份自由的保障！）",
          c: "20世纪杰出的社会寓言小说，反乌托邦三部曲之一，钱锺书、王小波、村上春树一致推崇！入选英、美、德、法等多国中学生必读书目！全球累积销量突破5000万册，多一人读《1984》，就多了一份自由的保障！",
          p: 28.10,
          op: 55.00,
          name: '1984'
        }
      ]
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  }
}
</script>

<style scoped>
.mu-carousel {
  height: 360px;
  width: 100%;
}
.mu-carousel-item {
  width: 100%;
  padding: 0 30px;
}
.mu-carousel-item > img {
  height: 100%;
  padding: 0 50px;
}
.mu-carousel-button.mu-icon-button {
  color: #aaa !important;
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
