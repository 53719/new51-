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

    <div class="video" v-if="postData.type == 2">{{postData.title}}</div>
  </div>
</template>

<script>
export default {
  props: ["postData"]
};
</script>

<style lang="less" scoped>
singleImg {
    display: flex;
    padding: 16px 10px;
    border-bottom: 1px solid #e4e4e4;
    .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .title {
            font-size: 16px;
        }
        .info {
            font-size: 14px;
            color: #888;
        }
    }
    .right {
        width: 120px;
        height: 74px;
        object-fit: cover;
    }
}

.multiImg {
    padding: 16px 10px;
    border-bottom: 1px solid #e4e4e4;
    .title {
        font-size: 16px;
    }
    .imgs {
        display: flex;
        justify-content: space-between;
        padding: 4px 0 8px;
        img {
            width: 33%;
            height: 74px;
        }
    }
    .info {
        font-size: 14px;
        color: #888;
    }
}
</style>