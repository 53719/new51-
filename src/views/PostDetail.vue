<template>
  <div>
    <div class="normalWrapper" v-if="postDetail.type == 1">
      <div class="header">
        <span class="iconfont iconjiantou2" @click="$router.back()"></span>
        <div class="logoWrapper">
          <span class="iconfont iconnew"></span>
        </div>

        <div
          class="btnFollow"
          :class="{highlight:!postDetail.has_follow}"
          @click="handleFollow"
        >{{postDetail.has_follow?'已关注':'关注'}}</div>
      </div>
      <div class="title">{{postDetail.title}}</div>
      <div class="info">{{postDetail.user.nickname}} {{postDetail.create_date.split('T')[0]}}</div>
      <div class="mainContent" v-html="postDetail.content"></div>
    </div>

    <div class="videoWrapper" v-if="postDetail.type == 2">
      <video
        class="player"
        controls
        poster="https://timgmb04.bdimg.com/timg?searchbox_feed&quality=100&wh_rate=0&size=b576_324&ref=http%3A%2F%2Fwww.baidu.com&sec=1568739067&di=612dd27cae470b93b01a4b32ef72fbac&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fe18c6ffa079441431f8988ca4c3ac106.jpeg"
        src="https://video.pearvideo.com/mp4/adshort/20200421/cont-1670293-15098199_adpkg-ad_hd.mp4"
      ></video>
      <div class="info">
        <div class="user">
          <img src="@/assets/logo1.png" alt />
          {{postDetail.user.nickname}}
        </div>
        <div
          class="btnFollow"
          :class="{highlight:!postDetail.has_follow}"
          @click="handleFollow"
        >{{postDetail.has_follow?'已关注':'关注'}}</div>
      </div>
      <div class="title">{{postDetail.title}}</div>
    </div>

    <div class="buttonsWrapper">
      <div class="btn dianzan" @click="handleLike">
        <span class="iconfont icondianzan"></span>
        {{postDetail.like_length}}
      </div>
      <div class="btn weixin">
        <span class="iconfont iconweixin"></span> 微信
      </div>
    </div>

    <Comment :commentData="item" v-for="(item,index) in commentList" :key="index" />

    <div class="MoreCoomment">
      <div
        class="btn"
        @click="$router.push('/morecomment/'+ $route.params.id)"
        v-if=" postDetail.comment_length>3"
      >更多跟帖</div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/comment/index";
export default {
  components: {
    Comment
  },
  data() {
    return {
      postDetail: {},
      commentList: []
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id
    }).then(res => {
      console.log(res.data);
      this.postDetail = res.data.data;
    });

    // 除了文章详情还要获取评论列表
    this.$axios({
      url: "/post_comment/" + this.$route.params.id
    }).then(res => {
      console.log(res.data);

      //  对于评论数组进行改造只剩下三条
      const commentList = res.data.data;
      commentList.length = 3;

      this.commentList = commentList;
    });
  },
  methods: {
    handleFollow() {
      // 针对关注取消关注, 有两个接口
      // 我们需要根据当前状态来决定用哪一个
      // 1. 判断当前状态
      if (this.postDetail.has_follow) {
        // 取消关注
        // 2. 发送请求
        this.$axios({
          url: "/user_unfollow/" + this.postDetail.user.id
        }).then(res => {
          console.log(res.data);
          if (res.data.message == "取消关注成功") {
            this.postDetail.has_follow = false;
          }
        });
      } else {
        // 关注
        this.$axios({
          url: "/user_follows/" + this.postDetail.user.id
        }).then(res => {
          console.log(res.data);
          // 3. 处理成功状况
          if (res.data.message == "关注成功") {
            this.postDetail.has_follow = true;
          }
        });
      }
    },
    handleLike() {
      this.$axios({
        url: "/post_like/" + this.postDetail.id
      }).then(res => {
        console.log(res.data);
        if (res.data.message == "点赞成功") {
          this.postDetail.like_length += 1;
        } else {
          this.postDetail.like_length -= 1;
        }
      });
    }
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
      border: 0.278vw solid #bbb;
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
.videoWrapper {
  .player {
    width: 100vw;
  }
  .info {
    padding: 14px 15.998px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    .user {
      display: flex;
      align-items: center;
      color: #888;
    }
    .btnFollow {
      border: 1.001px solid #bbb;
      padding: 4px 10.001px;
      font-size: 11.999px;
      border-radius: 10.001px;
      &.highlight {
        background: red;
        border-color: red;
        color: white;
      }
    }
    img {
      width: 25.999px;
      height: 25.999px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 6.001px;
    }
  }
  .title {
    padding: 0 15.998px;
    font-size: 15.998px;
    color: #333;
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

.MoreCoomment {
  height: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 11.111vw;
  .btn {
    font-size: 3.889vw;
    color: #666;
    padding: 0 5.556vw;
    height: 8.889vw;
    line-height: 8.889vw;
    border: 0.278vw solid #888;
    border-radius: 4.444vw;
  }
}
</style>