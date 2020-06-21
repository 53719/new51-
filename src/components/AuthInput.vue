<template>
  <div class="inputWrapper">
    <input type="type" :placeholder="textPlaceholder" v-model="inputVal" />
  </div>
</template>

<script>
export default {
  props: ["textPlaceholder", "type", "rule", "errMsg"],
  data() {
    return {
      inputVal: ""
    };
  },
  watch:{
    inputVal(newVal){
      const regExp = new RegExp(this.rule)
      const errMsg=this.errMsg
      const isValid=regExp.test(newVal)
      if(!isValid){
        console.log(errMsg);
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
}
</style>