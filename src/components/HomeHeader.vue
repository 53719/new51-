<template>
  <div class="headerWrapper">
      <span class="iconfont iconnew"></span>
      <div class="search">
          <span class="iconfont iconsearch"></span>
          搜索新闻
      </div>
    <span class="iconfont iconwode"></span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.headerWrapper {
    display: flex;
    align-items: center;
    background-color: red;
    color: white;
    padding: 1.111vw 2.778vw;
    .iconnew {
        font-size: 15vw;
    }
    .search {
        flex: 1;
        background-color: rgba(255, 255, 255, .4);
        margin: 0 5.556vw 0 3.889vw;
        text-align: center;
        height: 11.111vw;
        line-height: 11.111vw;
        border-radius: 5.556vw;
    }
    .iconwode {
        font-size: 8.889vw;
        opacity: .6;
    }
}
</style>