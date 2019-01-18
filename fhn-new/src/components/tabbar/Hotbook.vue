<template>
  <div class="app-book">

    <div class="mcontainer">
      <div class="mcard"
           v-for="item in list">
        <p class="mcard-h">{{item.title}}</p>
        <div class="mcard-b">
          <router-link to="/detail/2">
            <img :src="item.image"
                 alt="">
          </router-link>
        </div>
        <p class="mcard-f">{{item.introduction}}</p>
        <div class="star">
          <van-rate v-model="item.value"
                    :size="10"
                    readonly />
          <span>{{item.score}}</span>
        </div>
      </div>
    </div>
    <!--  -->
    <van-card tag="Hot"
              price="41.00"
              desc="每个人的心里都住着孤独"
              :title="list[1].title"
              :thumb="list[1].image"
              origin-price="59.00">

    </van-card>
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
  name: 'hotbook',
  data () {
    return {
      // value: 4,
      list: [{
        image: breakfast,
        title: '一九八四',
        introduction: '多一个人读《一九八四》，这世上就多一个自由的人。',
        score: 8.1,
        value: 4,
      }, {
        image: burger,
        title: '百年孤独',
        introduction: '每个人的心里都住着孤独，为了它开头的第一句话，你也应该去读。',
        score: 8.3,
        value: 5,
      }, {
        image: camera,
        title: '九三年',
        introduction: '在革命的终极胜利之上，还存在着人性的终极胜利。',
        score: 8.5,
        value: 4,
      }, {
        image: hats,
        title: '老人与海',
        introduction: '人永远不知道自己的潜力有多大，无论如何，绝对不要轻言放弃。',
        score: 9.1,
        value: 4,
      }, {
        image: mos,
        title: '月亮与六便士',
        introduction: '大多数人都成为了他们不得不成为的人，而非他们真正想成为的人。',
        score: 9.2,
        value: 4,
      }
      ]
    }
  }
}
</script>

<style scoped>
.mcontainer {
  display: -webkit-box;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
::-webkit-scrollbar {
  /* background-color: transparent; */
  display: none;
}
.mcard {
  width: 130px;
  padding: 5px;
  height: 320px;
}
.mcard-h {
  /* background: #eee; */
  margin: 0;
  padding: 5px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  /* text-align: center; */
}
.mcard-b {
  height: 160px;
  background: #aaa;
}
.mcard-b > a > img {
  width: 100%;
  height: 100%;
}
.mcard-f {
  background: #eee;
  margin: 0;
  padding: 3px;
  font-size: 10px;
  height: 25%;
  white-space: normal;
  color: #672;
}
.star {
  margin: 0;
  padding: 5px;
}
.van-rate {
  display: inline-block;
}
</style>
