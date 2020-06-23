<template>
  <div class="navWrapper">
      <div class="label">我的关注</div>
      <div class="desc">关注的用户</div>
      <a href="#" class="iconfont iconjiantou1"></a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.navWrapper{
  display: flex;
  padding: 4.444vw 6.667vw 4.444vw 0;
  margin-left: 6.667vw;
  border-bottom: 1px solid #e4e4e4;
  .label{
    font-size: 3.889vw;
    color:#333;
  }
  .desc{
    flex: 1;
    text-align: right;
    font-size: 3.333vw;
    color: #bbbbbb;
  }
}
</style>