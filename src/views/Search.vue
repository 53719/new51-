<template>
  <div>
    <div class="topsearch">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <div class="searchBox">
        <span class="iconfont iconsearch"></span>
        <input type="text">
      </div>
      <div class="btn">搜索</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.topsearch {
  display: flex;
  padding: 2.222vw 5.556vw;
  align-items: center;
  color: #333;
  .searchBox {
    flex: 1;
    border: 0.278vw solid #888;
    border-radius: 5.556vw;
    margin: 0 5.556vw;
    height: 10.556vw;
    align-items: center;
    padding: 0 2.778vw;
    .iconsearch{
        margin-right: 2.778vw;
        line-height: 10.556vw;
    }
    input{
        border: none;
    }
  }
  .btn{
      font-size: 3.889vw;
  }
}
</style>