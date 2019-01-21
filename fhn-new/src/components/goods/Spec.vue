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
    <div class="s-addr">
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
  </div>
</template>

<script>
export default {
  name: 'spec',
  data () {
    return {
      bookname: '1984'
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
