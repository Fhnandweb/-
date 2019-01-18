function goTop() {
  window.onscroll = function () {
    //变量scrollTop是滚动条滚动时，距离顶部的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);
    // return scrollTop;
  }
}


export {
  goTop
}
