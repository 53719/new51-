<template>
  <div>
    <div class="closeWrapper">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logoWapper">
      <span class="iconfont iconnew"></span>
    </div>

    <AuthInput 
        textPlaceholder="用户名/手机号码"
        type='text'
        rule='^\d{5,11}$'
        errMsg='请输入正确的手机号码'
         />
    <AuthInput
          textPlaceholder="密码"
          type="password"
          rule="^.{3,9}$"
          errMsg="请输入三到九位的密码"
          />

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
  font-size: 40vw;
  color: red;
  margin-left: 30vw;
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