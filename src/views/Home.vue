<template>
  <div>
    <HomeHeader />
      
    <van-tabs v-model="activeTab">

      <van-tab 
        :title="category.name"
        v-for="category in categoriesList"
        :key="category.id"
      >
         这里应该放 {{category.name}} 新闻
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
       activeTab: 0,
       categoriesList: []
    };
  },

  created(){
       this.$axios({
      url: '/category'
    }).then(res=>{
      console.log(res.data);
      this.categoriesList = res.data.data
    })
  }
};
</script>
<style scoped lang='less'>
</style>>

