<template>
  <div class="inputWrapper">
    <input 
      :class="{
          success: isValid,
          error: !isValid
          }"
      type="type" 
      :placeholder="textPlaceholder"
      v-model="inputVal"
       @blur="showTips"
       />
  </div>
</template>

<script>
export default {
  props: ["textPlaceholder", "type", "rule", "errMsg"],
  data() {
    return {
      inputVal: "",
      isValid:true,
    };
  },
  watch:{
    inputVal(newVal){
      // 1. 利用接收回来的字符串创建一个正则对象
      const regExp = new RegExp(this.rule)

      const errMsg=this.errMsg
      this.isValid = regExp.test(newVal)
      if(!this.isValid){
        console.log(errMsg);
      }
       // 2. 每当数据变化, 应该通知父组件
      this.$emit('valChanged',newVal)
    }
  },
  methods:{
    showTips(){
      if(!this.isValid){
        console.log('输入框失去焦点, 数据依然不合法'); 
        this.$toast.fail(this.errMsg)      
      }
    }
  }
};
</script>

<style lang="less" scoped>
.inputWrapper {
  padding: 0 6.667vw;
  input {
    font-size: 5vw;
    line-height: 16.667vw;
    outline: none;
    border: none;
    border-bottom: 1px solid #333;
    width: 100%;
  }
  .error{
 border-bottom-color: red;
 }
}

</style>