<template>
  <div>
      <div class="mainComment">
           <Parent :parentData="commentData.parent" v-if="commentData.parent"/>
           {{commentData.content}}
      </div>
  </div>
</template>

<script>
import Parent from './Parent'
export default {
    props:['commentData'],
    components:{
        Parent
    }
}
</script>

<style lang="less" scoped>
.mainComment {
    font-size: 20px;
    color: #333;
    padding: 10px;
    margin: 10px;
    border: 1px solid pink;
}
</style>