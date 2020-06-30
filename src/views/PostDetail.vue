<template>
  <div>
    <div class="normalWrapper" v-if="postDetail.type == 1">普通文章</div>

    <div class="videoWrapper" v-if="postDetail.type == 2">视频</div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            postDetail:{}
        }
    },
    created(){
        this.$axios({
            url:'/post/'+ this.$route.params.id
        }).then(res=>{
            console.log(res.data);
            this.postDetail=res.data.data
        })
    }
};
</script>

<style lang="less" scoped>
</style>