<template>
  <div>
    <TopNav titleText="我的跟帖" />
    <div class="list">
      <!-- 每个 item 都是一条评论 -->
      <!-- 我的评论里面有两种样式
      第一种直接回复文章没有 parent-->
      <div class="item">
        <div class="data">1996-10-29</div>
        <div class="content">阿信是张信哲吗?张信哲是张学友的弟弟吗?</div>
        <div class="origin">原文:阿信分享xxxxx</div>
      </div>
       <!-- 第二种 回复别人的评论, 带有 parent  -->
       <div class="item">
         <div class="data">1996-10-29</div>
         <div class="parentWrapper">
          <div class="info">
            回复: xxx
          </div>
          <div class="content">
            啦啦啦啦啦啦啦
          </div>
        </div>

        <div class="content">
          阿信是张信哲吗, 张信哲是张学友的弟弟吗?
        </div>
        <div class="origin">
          原文: 阿信分享xxxxx
        </div>
      
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
  padding: 10px 20px;
  border-bottom: 1px solid #e4e4e4;
  .date {
    font-size: 14px;
    color: #888;
    padding-bottom: 10px;
  }
  .content {
    font-size: 16px;
    color: #333;
  }
  .origin {
    padding-top: 10px;
    font-size: 14px;
    color: #999;
  }
  .parentWrapper {
    background: #e4e4e4;
    padding: 10px;
    color: #888;
    margin-bottom: 10px;
    .info {
      font-size: 14px;
    }
    .content {
      margin-top: 10px;
      color: #888;
    }
  }
}
</style>