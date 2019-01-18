<template>
  <div class="app-movie">
    <div class="mcontainer">
      <div class="mcard"
           v-for="item in moveList">
        <p class="mcard-h">{{item.title}}</p>
        <div class="mcard-b">
          <router-link to="/detail/3">
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
  </div>
</template>

<script>
import bawang from '../../assets/imgs/movies/bawang.jpg';
import qiao from '../../assets/imgs/movies/qiao.jpg';
import qingshe from '../../assets/imgs/movies/qingshe.jpg';
import sanguo from '../../assets/imgs/movies/sanguo.jpg';
import shibi from '../../assets/imgs/movies/shibi.jpg';
export default {
  name: 'hotmovie',
  data () {
    return {
      moveList: [{
        image: bawang,
        title: '霸王别姬',
        introduction: '假如生来就是一个演员，不如索性把戏当成人生来演。',
        score: 8.1,
        value: 4,
      }, {
        image: qiao,
        title: '桥',
        introduction: '我们一直忘了在彼此心底搭一座桥，体会什么才是生命的重要。',
        score: 8.5,
        value: 4,
      }, {
        image: qingshe,
        title: '青蛇',
        introduction: '人生如此，浮生如斯，不如静静看着流光飞舞。',
        score: 8.6,
        value: 4,
      }, {
        image: sanguo,
        title: '三国',
        introduction: '大而勇，智而壮；立身巍如泰山，皮厚赛过城墙；水火不侵，喜怒无形。',
        score: 8.1,
        value: 4,
      }, {
        image: shibi,
        title: '士兵突击',
        introduction: '改变你的世界,你可以做任何人!',
        score: 8.7,
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
