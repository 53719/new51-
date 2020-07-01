<template>
  <div class="box">
      {{num}}
      <fff :num='num-1' v-if="num>0"/>
  </div>
</template>

<script>
export default {
    name:'fff',
    props:['num']
}
</script>

<style lang="less" scoped>
.box{
    padding: 5px;
    border: 1px solid red;
}
</style>