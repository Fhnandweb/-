<template>
  <div class="order">
    <!--  -->
    <div class="container">
      <van-card v-for="item in list"
                :key="item.id"
                tag="Hot"
                :num="item.num"
                :price='item.price'
                :desc="item.introduction.slice(0,15)+'...'"
                :title="item.title"
                :thumb="item.image"
                :origin-price="item.oldprice">
      </van-card>
    </div>
    <!--  -->
    <totop />
    <!--  -->
  </div>
</template>

<script>
import breakfast from '../../assets/pics/1984.jpg';
import burger from '../../assets/pics/bainiangudu.jpg';
import camera from '../../assets/pics/jiusan.jpg';
import hats from '../../assets/pics/laorenyuhai.jpg';
import mos from '../../assets/pics/yueliang.jpg';
export default {
  name: 'order',
  data () {
    return {
      list: [{
        image: breakfast,
        title: '一九八四',
        introduction: '多一个人读《一九八四》，这世上就多一个自由的人。',
        price: 41.25,
        oldprice: 59.99,
        num: 1
      }, {
        image: burger,
        title: '百年孤独',
        introduction: '每个人的心里都住着孤独，为了它开头的第一句话，你也应该去读。',
        price: 25.99,
        oldprice: 50.99,
        num: 5
      }, {
        image: camera,
        title: '九三年',
        introduction: '在革命的终极胜利之上，还存在着人性的终极胜利。',
        price: 30.12,
        oldprice: 49.99,
        num: 3
      }, {
        image: hats,
        title: '老人与海',
        introduction: '人永远不知道自己的潜力有多大，无论如何，绝对不要轻言放弃。',
        price: 50.18,
        oldprice: 60.99,
        num: 1
      }]
    }
  }
}
</script>

<style scoped>
</style>
