<template>
  <div class="cinecism">
    <mnav />
    <!--  -->
    <div class="mcontainer">
      <div>
        <div class="dleft">
          <img :src="list[0].imgurl"
               alt="">
        </div>
        <!--  -->
        <div class="dright">
          <div></div>
          <div>
            <div>霸王别姬</div>
            <div>
              <span class="score">★★★★★</span>
              <span>9.6</span>
            </div>
            <div>
              171 分钟 / 剧情 / 爱情 / 同性 / 陈凯歌(导演) / 张国荣 / 张丰毅 / 巩俐 / 1993-01-01(香港) 上映
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
    <!--  -->
    <h3 class="somelook">
      <span>在哪儿看</span>
      <span>5播放源 ></span>
    </h3>
    <!--  -->
    <div class="btngrounp">
      <van-button plain
                  type="danger">想看</van-button>
      <van-button plain
                  type="danger">看过</van-button>
    </div>
    <!--  -->
    <div class="btntype">
      <h3>所属频道</h3>
      <van-button plain
                  v-for="item in btnlist"
                  :key="item.id"
                  size="small"
                  round
                  type="primary">{{item}} ></van-button>
    </div>
    <!--  -->
    <div class="btntype">
      <h3>剧情简介</h3>
      <div v-show="isShow">
        {{mcontent | textFilter}} <span @click="handleOpen"
              class="greenfont">（展开）</span>
      </div>
      <div v-show="!isShow">
        {{mcontent}} <span @click="handleOpen"
              class="greenfont">（收回）</span>
      </div>
    </div>
    <!--  -->
    <div class="btntype">
      <h3 class="comment">影视短评</h3>
      <div class="talkcon"
           v-for="item in 5">
        <h4>蘑菇</h4>
        <p> -- 一个月前</p>
        <p>如果拍完这部电影就死去，陈凯歌就不朽了！！可惜他后来又拍了不少电影。。。</p>
        <p>
          <van-icon name="like-o"
                    size="15px" /><span>1520</span>
        </p>
      </div>
    </div>
    <!--  -->
    <h3 class="shopName">微阅 Light Reading</h3>
    <!--  -->
    <tohome />
    <totop />
  </div>
</template>

<script>
import bawang from '../../assets/imgs/movies/bawang.jpg';
export default {
  name: 'cinecism',
  data () {
    return {
      isShow: true,
      list: [
        { lid: 0, imgurl: bawang }
      ],
      btnlist: [
        "经典", "人性", "文艺片", "爱情片", "人生", "文革", "剧情片"
      ],
      mcontent: `段小楼（张丰毅）与程蝶衣（张国荣）是一对打小一起长大的师兄弟，两人一个演生，一个饰旦，一向配合天衣无缝，尤其一出《霸王别姬》，更是誉满京城，为此，两人约定合演一辈子《霸王别姬》。但两人对戏剧与人生关系的理解有本质不同，段小楼深知戏非人生，程蝶衣则是人戏不分。
段小楼在认为该成家立业之时迎娶了名妓菊仙（巩俐），致使程蝶衣认定菊仙是可耻的第三者，使段小楼做了叛徒，自此，三人围绕一出《霸王别姬》生出的爱恨情仇战开始随着时代风云的变迁不断升级，终酿成悲剧。`
    }
  },
  methods: {
    handleOpen () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
.shopName {
  margin-bottom: 50px;
  text-align: center;
  font-weight: bold;
  color: #f00;
  font-size: 20px;
}
.mcontainer {
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background: url("../../assets/movies/movie.jpg") no-repeat;
  background-size: 100% 250px;
  /* text-align: center; */
}
.mcontainer > div:first-child {
  width: 80%;
  height: 230px;
  margin: 0 auto;
  display: flex;
}
.dleft {
  width: 40%;
  height: 200px;
}
.dright {
  width: 60%;
  height: 200px;
}
.dleft > img {
  width: 100%;
  height: 100%;
}
.dright > div:first-child {
  width: 100%;
  height: 50px;
  background: transparent;
}
.dright > div:nth-child(2) {
  width: 100%;
  height: 190px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.8);
}
.dright > div:nth-child(2) > div:first-child {
  font-weight: bold;
  font-size: 20px;
  padding-top: 5px;
}
.score {
  color: #ffb712;
  font-size: 16px;
}
.btngrounp {
  display: flex;
}
.btngrounp > .van-button {
  width: 50%;
}

.somelook {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  color: #58b969;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
}
.btntype {
  padding: 0 30px;
}
.btntype .van-button {
  background: rgba(85, 185, 105, 0.2);
  margin: 3px 2px;
}
.greenfont {
  color: #58b969;
}
.comment {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
h4,
p {
  margin: 0;
}
.talkcon {
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}
.talkcon p {
  padding: 5px 0;
}
.talkcon p:last-child {
  height: 35px;
  line-height: 35px;
}
.talkcon p:last-child span {
  margin-left: 10px;
  font-size: 15px;
}
</style>
