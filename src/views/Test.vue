<template>
  <div>
     <!-- 遍历评论列表用评论子组件渲染每条评论 -->
    <Comment :commentData="comment" v-for="(comment,index) in commentList" :key="index"/>
  </div>
  
</template>

<script>
import Comment from '@/components/comment/index'
export default {
  components:{
    Comment
  },
  data() {
    return {
      commentList: []
    }
  },
  created() {
    this.$axios({
      url: '/post_comment/1'
    }).then(res=>{
      console.log(res.data);
      this.commentList = res.data.data
      
    })
  }
}
</script>

<style lang="less" scoped>
</style>