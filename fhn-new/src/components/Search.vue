<template>
  <div class="app-search">
    <mnav></mnav>
    <!--  -->
    <van-search v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                background="#efeff4"
                @search="onSearch"
                @cancel="onCancel">
      <div slot="action"
           @click="onSearch">搜索</div>
    </van-search>

    <!--  -->
    <mu-container class="button-wrapper">
      <mu-button color="info">撒哈拉的故事</mu-button>
      <mu-button flat>围城</mu-button>
      <mu-button color="success">江城</mu-button>

      <mu-button flat
                 color="primary">简爱</mu-button>

      <mu-button color="secondary">送你一颗子弹</mu-button>
      <mu-button flat
                 color="success">浮生六记</mu-button>
      <mu-button flat
                 color="warning">看见</mu-button>
      <mu-button color="primary">沉默的大多数</mu-button>
      <mu-button color="error">我为你洒下的月光</mu-button>
      <mu-button color="warning">时间的果</mu-button>
      <mu-button flat
                 color="secondary">平凡的世界</mu-button>

    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      value: ""
    }
  },
  methods: {
    onSearch () { },
    onCancel () { }
  }
}
</script>

<style scoped>
.button-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
}
.mui-input-row {
  margin-top: 20px;
}
/* input[type="search"] {
  margin-bottom: 0 !important;
} */
</style>
