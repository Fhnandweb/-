<template>
  <div class="spec">
    <!-- 规格 -->
    <!-- 规格 -->
    <!-- <spec /> -->
    <div class="msale">
      <span>促销</span>
      <span>跨自营/店铺满减</span>
      <span>每满100元，可减50元现金</span>
      <span>...</span>
    </div>
    <!--  -->
    <div style="padding:0 15px;">
      <hr>
    </div>
    <!--  -->
    <div class="s-addr"
         @click="handleOpen">
      <span>规格</span>
      <span>{{bookname}} 1个</span>
      <span>...</span>
    </div>
    <!--  -->
    <div style="padding:0 15px">
      <hr>
    </div>
    <!--  -->
    <div class="sl-addr">
      <div class="addr-item">
        <span>送至</span>
        <span>北京朝阳区三环到四环之间</span>
        <span>...</span>
      </div>
      <div class="addr-item">
        <span>重量</span>
        <span>0.39kg</span>
        <span>...</span>
      </div>
    </div>
    <!--  -->
    <div v-show="isShow"
         class="mask">
      <div class="main">
        <h5 style="text-align:end;color:#f00"
            @click="handleClose">关闭 x</h5>
        <div class="smcon">
          <img class="smbook"
               :src="pic"
               alt=""> <span class="pricefont"><span>￥28.10</span><span>库存 500 件</span></span>
        </div>
        <h5>规格</h5>
        <van-button type="default"
                    @click="checkBook"
                    :class="{debutton:isClass}">1984</van-button>
        <h5>数量</h5>
        <van-stepper v-model="value" />
        <h5>其他服务</h5>

        <van-checkbox v-model="checked">礼盒包装
          <van-icon name="gift"
                    color="#f00" />
        </van-checkbox>
        <p style="width:100%;height:50px"></p>
      </div>
      <div class="mbottom">
        <button>加入购物车</button>
        <button>立即购买</button>
      </div>

    </div>
    <!--  -->
  </div>
</template>

<script>
import pic0 from '../../assets/imgs/details/1-0.jpg';
export default {
  name: 'spec',
  data () {
    return {
      pic: pic0,
      bookname: '1984',
      value: 1,
      checked: false,
      isClass: false,
      isShow: false
    }
  },
  methods: {
    checkBook () {
      this.isClass = !this.isClass
    },
    handleClose () {
      this.isShow = false
    },
    handleOpen () {
      this.isShow = true
    }
  },

}
</script>

<style scoped>
/*  */
.pricefont {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 10px;
}
.pricefont span:first-child {
  color: #ed1628;
}
.pricefont span:nth-child(2) {
  font-size: 12px;
  padding-left: 5px;
  padding-top: 10px;
}
.smbook {
  width: 80px;
  height: 100px;
  background: #999;
}
.smcon {
  display: flex;
  justify-content: end;
}
/*  */
.mbottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 101;
  display: flex;
  justify-content: space-around;
}
.mbottom button {
  width: 50%;
  height: 50px;
  border: 0;
  color: #fff;
}
.mbottom button:first-child {
  background: #fa8030;
}
.mbottom button:last-child {
  background: #ed1628;
}
.van-button {
  border: 1px solid #999;
}
.debutton {
  background-color: rgba(240, 33, 33, 0.74);
  color: #fff;
  border: 0;
}
.mask {
  position: fixed;
  bottom: 0;
  z-index: 101;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.main {
  width: 100%;
  height: 60%;
  position: absolute;
  bottom: 0;
  background: #fff;
  padding: 0 30px;
  overflow-y: scroll;
}
/*  */
.msale,
.sl-addr,
.s-addr,
.comment,
.content {
  width: 100%;
  padding: 10px 10px;
}
.msale span,
.s-addr span,
.addr-item span {
  display: inline-block;
}
.addr-item {
  padding: 5px 0;
}
hr {
  background: #ddd;
  height: 1px;
  border: 0;
}
.msale span:first-child,
.s-addr span:first-child,
.addr-item span:first-child {
  color: #999;
  width: 10%;
}
.s-addr span:nth-child(2),
.addr-item span:nth-child(2) {
  width: 82%;
  padding: 0 20px;
}
.msale span:nth-child(2) {
  color: #f00;
  border: 1px solid #f00;
  padding: 0 3px;
  width: 30%;
  text-align: center;
}
.msale span:nth-child(3) {
  width: 50%;
  text-align: center;
}
.msale span:nth-child(4) {
  width: 5%;
  text-align: center;
}
</style>
