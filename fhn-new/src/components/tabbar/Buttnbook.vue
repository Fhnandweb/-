<template>
  <div class="app-btnbook">
    <van-button plain
                type="primary">人生识字始忧患</van-button>
    <mu-button flat
               color="primary">村上春树周边</mu-button>
    <van-button plain
                type="danger">蘑菇看书</van-button>
    <mu-button flat
               color="success">诗歌书社</mu-button>
    <van-button plain
                type="warning">朴素按钮</van-button>
    <mu-button flat
               color="secondary">我凭名字认定了你</mu-button>
    <mu-button flat
               color="warning">文言派</mu-button>
  </div>
</template>

<script>
export default {
  name: 'btnbook',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.van-button {
  margin: 2px;
}
</style>
