<template>
  <div>
    <Parent :parentData="parentData.parent" v-if="parentData.parent" />
    <div class="parentComment">
      <div class="info">
        <div class="user">
          {{parentData.user.nickname}}
          2 小时前
        </div>
        <div class="btnReply">回复</div>
      </div>

      <div class="content">{{parentData.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parent",
  props: ["parentData"]
};
</script>

<style lang="less" scoped>
.parentComment {
  font-size: 3.889vw;
  color: #888;
  padding: 2.778vw;
  border: 0.278vw solid #e4e4e4;
}
.info {
    display: flex;
    justify-content: space-between;
    .btnReply {
        font-size: 3.333vw;
    }
}
.content {
    padding: 2.778vw 0;
}
</style>