<template>
  <div v-if="commentData">
    <div class="mainComment">
      <div class="info">
        <img src="@/assets/logo.png" alt />
        <div class="user">
          <div class="name">{{commentData.user.nickname}}</div>
          <div class="time">2小时</div>
        </div>
        <div class="btnReply" @click="callReply">回复</div>
      </div>

      <Parent :parentData="commentData.parent" v-if="commentData.parent" />

      <div class="content">{{commentData.content}}</div>
    </div>
  </div>
</template>

<script>
import Parent from "./Parent";
export default {
  props: ["commentData"],
  components: {
    Parent
  },
  methods:{
    callReply(){
      this.$emit('callReply',this.commentData.id)
    }
  }
};
</script>

<style lang="less" scoped>
.mainComment {
  font-size: 5.556vw;
  color: #333;
  padding: 2.778vw;
  border-bottom: 0.278vw solid #e4e4e4;
}
.info {
  display: flex;
  align-items: center;
  padding: 5.556vw 0;
  img {
    width: 9.722vw;
    height: 9.722vw;
    object-fit: cover;
    border-radius: 50%;
  }
  .user {
    padding: 0 2.778vw;
    flex: 1;
    font-size: 3.889vw;
    .time {
      font-size: 3.333vw;
      color: #888;
    }
  }
  .btnReply {
    font-size: 3.889vw;
    color: #666;
  }
}
.content {
  padding: 5.556vw 0;
  font-size: 4.444vw;
}
</style>