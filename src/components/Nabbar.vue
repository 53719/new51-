<template>
  <div class="navWrapper" @click="handleClick">
      <div class="label">{{LabelText}}</div>
      <div class="desc">{{descText}}</div>
      <a href="#" class="iconfont iconjiantou1" ></a>
  </div>
</template>

<script>
export default {
props:['LabelText','descText'],
methods:{
  handleClick(){
    console.log('横条子组件被点击');
    this.$emit('barClick')
    
  }
}
}
</script>

<style lang="less" scoped>
.navWrapper{
  display: flex;
  padding: 4.444vw 6.667vw 4.444vw 0;
  margin-left: 6.667vw;
  border-bottom: 1px solid #e4e4e4;
  .label{
    font-size: 3.889vw;
    color:#333;
  }
  .desc{
    flex: 1;
    text-align: right;
    font-size: 3.333vw;
    color: #bbbbbb;
  }
}
</style>