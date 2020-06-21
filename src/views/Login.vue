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
         @valChanged="setUsername"
         />
    <AuthInput
          textPlaceholder="密码"
          type="password"
          rule="^.{3,9}$"
          errMsg="请输入三到九位的密码"
           @valChanged="setPassword"
          />

  <AuthBtn btnText="登录" @clicked="login"/>
  </div>
</template>

<script>
import AuthInput from "@/components/AuthInput";
import AuthBtn from "@/components/AuthBtn"

export default {
  data () {
    return{
            username: '',
            password: ''
    }
  },
  components: {
    AuthInput,
    AuthBtn
  },
  methods:{
     login() {
            console.log('父组件接收到按钮子组件的点击事件, 触发自己的登录函数'); 
            // 登录请求就需要 用户名和密码的数据
            // 这里直接通过 this.username / this.password 拿到用户输入数据
            console.log('用户名', this.username);
            console.log('密码', this.password); 
        },
        setUsername(username) {
            this.username = username
        },
        setPassword(password) {
            this.password = password
        }
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
</style>