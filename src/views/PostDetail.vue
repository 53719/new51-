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

        <div class="buttonsWrapper">
      <div class="btn dianzan">
        <span class="iconfont icondianzan"></span> 520
      </div>
      <div class="btn weixin">
        <span class="iconfont iconweixin"></span> 微信
      </div>
    </div>
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
  padding: 0 4.444vw;
  
  .header {
    display: flex;
    align-items: center;
    .logoWrapper {
      flex: 1;
      padding-left: 2.778vw;
      .iconnew {
        font-size: 15vw;
      }
    }
    .btnFollow {
      border:0.278vw solid #bbb;
      padding: 1.111vw 2.778vw;
      font-size: 3.333vw;
      border-radius: 2.778vw;
    }
  }
  .title {
    font-size: 4.444vw;
    font-weight: bold;
  }
  .info {
    font-size: 3.889vw;
    color: #aaa;
    padding: 1.667vw 0 4.444vw;
  }
  /deep/ img {
    // 这里用 width 并不严谨
    max-width: 100%;
  }
}
.buttonsWrapper {
  display: flex;
  justify-content: space-around;
  padding: 11.111vw 0 27.778vw;
  border-bottom: 1.111vw solid #e4e4e4;
  .btn {
    border: 0.278vw solid #888;
    font-size: 3.889vw;
    line-height: 8.333vw;
    height: 8.333vw;
    padding: 0 4.444vw;
    border-radius: 4.444vw;
    .iconweixin {
      color: #00c800;
    }
  }
}
</style>