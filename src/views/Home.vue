<template>
  <div>
    <HomeHeader />
      
    <van-tabs v-model="activeTab">

      <van-tab title="体育">
        这里应该放体育新闻
      </van-tab>

      <van-tab title="标签 2">
        内容 2
      </van-tab>
      
      <van-tab title="标签 2">
        内容 2
      </van-tab>

       <van-tab title="体育">
        这里应该放体育新闻
      </van-tab>

      <van-tab title="标签 2">
        内容 2
      </van-tab>
      
      <van-tab title="标签 2">
        内容 2
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
export default {
    components: {
   HomeHeader
  },
  data() {
    return {
       activeTab: 0
    };
  },

  mounted(){
    setTimeout(()=>{
      this.activeTab=3
    },2000)
  }
};
</script>
<style scoped lang='less'>
</style>>

