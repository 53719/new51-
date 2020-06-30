<template>
  <div class="profile">
    <span class="iconfont iconjiantou2" @click="$router.back()"></span>
    <div class="title">{{titleText}}</div>
  </div>
</template>

<script>
export default {
  props: ["titleText"],
};
</script>

<style lang="less" scoped>
.profile {
  display: flex;
  padding: 0 6.667vw;
  height: 16.667vw;
  align-items: center;
  .title {
    flex: 1;
    text-align: center;
    font-size: 3.889vw;
    color: #333;
    font-weight: bold;
  }
}
</style>