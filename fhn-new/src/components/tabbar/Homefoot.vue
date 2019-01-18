<template>
  <div class="app-hfoot">
    <div class="browse">
      <div class="book">
        <h4>书籍</h4>
        <ul>
          <li>> 小说</li>
          <li>> 励志</li>
          <li>> 爱情</li>
        </ul>
      </div>
      <div class="movie">
        <h4>影视</h4>
        <ul>
          <li>> 悬疑</li>
          <li>> 古装</li>
          <li>> 纪录片</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homefoot',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.browse {
  display: flex;
}
.browse li {
  padding: 5px;
  padding-left: 30px;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  color: #4ac953;
}
.movie li {
  border-right: 0;
}
.book,
.movie {
  width: 50%;
}
h4 {
  margin: 0;
  padding-left: 20px;
  background: rgb(185, 146, 19);
  color: #fff;
}
</style>
