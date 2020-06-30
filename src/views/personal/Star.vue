<template>
  <div>
      <TopNav titleText='我的收藏'/>
      <PostItem :postData='item' v-for="item in postList" :key="item.id"/>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import PostItem from "@/components/PostItem";
export default {
    components:{
        TopNav,
        PostItem
    },
    data () {
        return {
            postList:[]
        }
    },
       created(){
        this.$axios({
            url: '/user_star'
        }).then(res=>{
            // 1. 这里是页面一进来获取数据
            console.log(res.data);
            // 将数据放到 data 中
            this.postList = res.data.data
        })
    }
};
</script>
<style lang="less" scoped>
</style>