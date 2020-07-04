<template>
  <div>
      <TopNav titleText="更多跟帖"/>
       <Comment 
            :commentData="item" 
            v-for="item in commentList" 
            :key="item.id" 
            @callReply="callReply"
        />
        <CommentInput 
            @reloadComment="loadComment" 
            ref="commentInput" 
            :parentInfo="commentInfo"
        />
  </div>
</template>

<script>
import Comment from '@/components/comment/index'
import TopNav from '@/components/TopNav'
import CommentInput from '@/components/CommentInput'
export default {
    components: {
        Comment,
        TopNav,
        CommentInput
    },
    data() {
        return {
            commentList: [],
            commentInfo: {}
        }
    },
    created() {
         this.loadComment()
    },
        methods: {
        callReply(commentInfo) {
        // 1. 将 id 存起来交给 输入框组件
        this.commentInfo = commentInfo;
        console.log('获取到了该回复的 parentid');
        // 2. 调起输入框, 输入框是 CommentInput 子组件的 showTextarea 函数
        this.$refs.commentInput.showTextarea()
        },
        loadComment() {
            this.$axios({
                url: "/post_comment/" + this.$route.params.id
            }).then(res => {
                this.commentList = res.data.data;
            });
        }
    }
}
</script>

<style>

</style>