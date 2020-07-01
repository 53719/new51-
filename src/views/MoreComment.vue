<template>
  <div>
      <TopNav titleText="更多跟帖"/>
      <Comment :commentData="item" v-for="item in commentList" :key="item.id"/>
  </div>
</template>

<script>
import Comment from '@/components/comment/index'
import TopNav from '@/components/TopNav'
export default {
    components: {
        Comment,
        TopNav
    },
    data() {
        return {
            commentList: []
        }
    },
    created() {
        this.$axios({
            url: '/post_comment/' + this.$route.params.id
        }).then(res=>{
            this.commentList = res.data.data
        })
    }
}
</script>

<style>

</style>