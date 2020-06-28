<template>
  <div>
    <!-- 三种文章类型区分方式, 数据中 type 如果是 1 就是普通文章
        按照 cover 属性的长度, 如果小于三 就显示一张图的格式
        如果大于等于三就显示三张图的格式
    如果是 2 就是视频文章-->
    <div class="singleImg" v-if="postData.type == 1 && postData.cover.length < 3">
      <div class="left">
        <div class="title">{{postData.title}}</div>
        <div class="info">{{postData.user.nickname}} {{postData.comment_length}}跟帖</div>
      </div>
      <img :src="postData.cover[0].url" alt class="right" />
    </div>

    <div class="multiImg" v-if="postData.type == 1 && postData.cover.length >=3">
      <div class="title">{{postData.title}}</div>
      <div class="imgs">
        <img :src="postData.cover[0].url" alt />
        <img :src="postData.cover[1].url" alt />
        <img :src="postData.cover[2].url" alt />
      </div>
      <div class="info">{{postData.user.nickname}} {{postData.comment_length}}跟帖</div>
    </div>

    <div class="video" v-if="postData.type == 2">
            <div class="title">{{postData.title}}</div>
            <div class="coverWrapper">
                <img :src="postData.cover[0].url" alt="">
                <div class="iconfont iconshipin"></div>
            </div>
            <div class="info">
                {{postData.user.nickname}} {{postData.comment_length}}跟帖
            </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["postData"]
};
</script>

<style lang="less" scoped>
.singleImg {
    display: flex;
    padding: 4.444vw 2.778vw;
    border-bottom: 1px solid #e4e4e4;
    .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .title {
            font-size: 4.444vw;
        }
        .info {
            font-size: 3.889vw;
            color: #888;
        }
    }
    .right {
        width: 33.333vw;
        height: 20.556vw;
        object-fit: cover;
    }
}

.multiImg {
    padding: 4.444vw 2.778vw;
    border-bottom: 1px solid #e4e4e4;
    .title {
        font-size: 4.444vw;
    }
    .imgs {
        display: flex;
        justify-content: space-between;
        padding: 1.111vw 0 2.222vw;
        img {
            width: 33%;
            height: 20.556vw;
            object-fit: cover;
        }
    }
    .info {
        font-size: 3.889vw;
        color: #888;
    }
}
.video {
    padding: 4.444vw 2.778vw;
    border-bottom: 1px solid #e4e4e4;
    .title {
        font-size: 4.444vw;
    }
    .coverWrapper {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        padding: 1.111vw 0 2.222vw;
        img {
            width: 100%;
            height: 47.222vw;
            object-fit: cover;
        }
        .iconshipin {
            position: absolute;
            font-size: 12.778vw;
            height: 12.778vw;
            line-height: 12.778vw;
            text-align: center;
            background: #aaa;
            color: white;
            border-radius: 50%;
        }
    }
    .info {
        font-size: 3.889vw;
        color: #888;
    }
}

</style>