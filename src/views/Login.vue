<template>
  <div>
    <div class="closeWrapper">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logoWapper">
      <span class="iconfont iconnew"></span>
    </div>

    <AuthInput />
    <AuthInput />

    <div class="butWapper">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import AuthInput from "@/components/AuthInput";

export default {
  components: {
    AuthInput
  }
};
</script>

<style lang="less" scoped>
.closeWrapper {
  padding: 6.667vw 6.667vw 0;
  .iconicon-test {
    font-size: 7.5vw;
  }
}
.iconnew {
  font-size: 50vw;
  color: red;
  margin-left: 25vw;
}

.butWapper {
  text-align: center;
  margin-top: 16.667vw;
  button {
    width: 88.333vw;
    height: 13.333vw;
    background-color: #cc3300;
    color: white;
    font-size: 5vw;
    border: none;
    border-radius: 6.667vw;
  }
}
</style>