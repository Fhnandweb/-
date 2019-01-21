<template>
  <div class="moreDetails">
    <!--  -->
    <van-tabs type="card">
      <van-tab title="商品介绍">
        <p class="product-point">
          <span></span><span>产品特色</span><span></span></p>
        <div class="productShow">
          <img style="width:100%"
               :src="detailList"
               alt="">
        </div>
      </van-tab>
      <!--  -->
      <van-tab title="规格参数">
        <p class="product-point">
          <span></span><span>商品参数</span><span></span></p>
        <ul class="product-list">
          <li v-for="item in list">
            <span>{{item.left}}</span>
            <span>{{item.right}}</span>
          </li>
        </ul>
      </van-tab>
      <!--  -->
      <van-tab title="售后保障">
        <div class="content">
          <h3 class="somecontent">
            <van-icon name="youzan-shield" />{{someList[0].title}}</h3>
          <p>{{someList[0].main}}</p>
          <h3 class="somecontent">
            <van-icon name="bag" />{{someList[1].title}}</h3>
          <p>{{someList[1].main}}</p>
          <p>{{someList[1].main2}}</p>
        </div>
      </van-tab>
    </van-tabs>
    <h3 class="shopName">微阅 Light Reading</h3>
    <!--  -->
  </div>
</template>

<script>
import detail1 from '../../assets/imgs/details/detail1.jpg';
export default {
  name: 'moreDetails',
  data () {
    return {
      detailList: detail1,
      list: [
        { left: "商品编号", right: "12386744" },
        { left: "ISBN", right: "58941461465461" },
        { left: "作者", right: "[英]乔治奥.威尔" },
        { left: "开本", right: "32开" },
        { left: "包装", right: "平装" },
        { left: "版次", right: "1" },
        { left: "出版时间", right: "2018-06-01" },
        { left: "用纸", right: "纯质纸" },
      ],
      someList: [
        { title: "正品行货", main: "微阅向您保证所售商品均为正品行货，自营商品开具机打发票或电子发票。" },
        { title: "全国联保", main: "凭质保证书及微阅发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由微阅联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。微阅还为您提供具有竞争力的商品价格和运费政策，请您放心购买！", main2: "注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！" },
      ]
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
.shopName {
  margin-bottom: 80px;
  text-align: center;
  font-weight: bold;
  color: #f00;
  font-size: 20px;
}
.product-point {
  text-align: center;
  padding: 0 10px;
}
.product-point span {
  display: inline-block;
  width: 33%;
  border-bottom: 1px solid #888;
}
.product-point span:nth-child(2) {
  border: 0;
}
.product-list {
  width: 100%;
  padding: 0 10px;
}
.product-list li {
  width: 100%;
  border: 1px solid #999;
  padding: 5px;
}
.product-list li span {
  display: inline-block;
}
.product-list li span:first-child {
  width: 30%;
  border-right: 1px solid #999;
}
/*  */
.somecontent {
  color: #f00;
}
</style>
