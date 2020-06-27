<template>
  <div>
    <TopNav titleText="我的关注" />
    <div class="list">
      <div class="item">
        <img class="avatar" src="@/assets/logo1.png" alt />
        <div class="info">
          <div class="name">上流ZOOM</div>
          <div class="data">2020-09-01</div>
        </div>
        <div class="btnUnfollow">取消关注</div>
      </div>

      <div class="item">
        <img class="avatar" src="@/assets/logo.png" alt />
        <div class="info">
          <div class="name">369</div>
          <div class="data">2020-09-01</div>
        </div>
        <div class="btnUnfollow">取消关注</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
export default {
  components: {
    TopNav
  }
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  align-items: center;
  padding: 5.556vw 6.667vw;
  border-bottom: 1px solid #e4e4e4;
  .avatar {
    width: 11.111vw;
    height: 11.111vw;
    object-fit: cover;
    border-radius: 50%;
  }
  .info {
    flex: 1;
    padding: 0 2.778vw;
    .name {
      font-size: 4.444vw;
    }
    .date {
      font-size: 3.889vw;
      color: #bbb;
      padding-top: 1.111vw;
    }
  }
  .btnUnfollow {
    font-size: 3.333vw;
    background: #e4e4e4;
    padding: 0 2.778vw;
    height: 8.333vw;
    line-height: 8.333vw;
    border-radius: 4.167vw;
  }
}
</style>