<template>
  <div>
    <div class="normalWrapper" v-if="postDetail.type == 1">
      <div class="header">
        <span class="iconfont iconjiantou2" @click="$router.back()"></span>
        <div class="logoWrapper">
          <span class="iconfont iconnew"></span>
        </div>
        <div class="btnFollow">已关注</div>
      </div>
      <div class="title">{{postDetail.title}}</div>
      <div class="info">{{postDetail.user.nickname}} {{postDetail.create_date.split('T')[0]}}</div>
      <div class="mainContent" v-html="postDetail.content"></div>
    </div>

    <div class="videoWrapper" v-if="postDetail.type == 2">视频</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postDetail: {}
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id
    }).then(res => {
      console.log(res.data);
      this.postDetail = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.normalWrapper {
  padding: 0 16px;
  
  .header {
    display: flex;
    align-items: center;
    .logoWrapper {
      flex: 1;
      padding-left: 10px;
      .iconnew {
        font-size: 54px;
      }
    }
    .btnFollow {
      border:1px solid #bbb;
      padding: 4px 10px;
      font-size: 12px;
      border-radius: 10px;
    }
  }
  .title {
    font-size: 16px;
    font-weight: bold;
  }
  .info {
    font-size: 14px;
    color: #aaa;
    padding: 6px 0 16px;
  }
  /deep/ img {
    // 这里用 width 并不严谨
    max-width: 100%;
  }
}
</style>