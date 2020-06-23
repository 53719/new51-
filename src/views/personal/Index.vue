<template>
  <div>
    <div class="profile">
      <img src="@/assets/logo1.png" alt class="avatar" />
      <div class="info">
        <div class="name">
          <span class="iconfont iconxingbienv"></span>
          舔狗
        </div>
        <div class="data">2020-6-23</div>
      </div>
      <a href="#" class="iconfont iconjiantou1"></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.profile {
  display: flex;
  align-items: center;
  padding: 6.667vw;
  .avatar {
    width: 19.444vw;
    height: 19.444vw;
    object-fit: cover;
    border-radius: 50%;
  }
  .info {
    flex: 1;
    padding-left: 2.778vw;
    font-size: 3.889vw;
    .name {
        .iconxingbienv{
            color: hotpink;
        }
    }
    .data{
        padding-top: 1.389vw;
        color: gray;
    }
  }
}
</style>