<template>
  <div id="app">
    <div class="switch">
      <router-link to="/">
        <span class="iconfont iconnew"></span>
      </router-link>
      <router-link to="/personal">
        <span class="iconfont iconwode"></span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
// 全局引入字体图标
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
//全局的 css reset设置
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

ul,
li,
ol {
  list-style: none;
}
.switch {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 13.333vw;
  background-color: #000;
  opacity: 0.5;
  z-index: 999;
  .iconnew {
    float: left;
    width: 50vw;
    text-align: center;
    line-height: 13.333vw;
    font-size: 25vw;
    color: #fff;
    border-right: 1px solid #fff;
  }
  .iconwode {
    float: left;
    width: 50vw;
    text-align: center;
    line-height: 13.333vw;
    font-size: 9.722vw;
    color: #fff;
    border-right: 1px solid #fff;
  }
}
</style>
