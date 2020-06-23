<template>
  <div>
    <div class="closeWrapper">
      <a href="/" class="iconfont iconicon-test"></a> 
    </div>
    <div class="logoWapper">
      <span class="iconfont iconnew"></span>
    </div>

    <AuthInput 
        textPlaceholder="用户名/手机号码"
        type='text'
        :rule='ruleUsername'
        errMsg='请输入正确的手机号码'
         @valChanged="setUsername"
         />
    <AuthInput
          textPlaceholder="密码"
          type="password"
          :rule="rulePassword"
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
            password: '',
            ruleUsername:'^\\d{5,11}$',
            rulePassword:'^.{3,9}$'
    }
  },
  components: {
    AuthInput,
    AuthBtn
  },
  methods:{
     login() {
            // console.log('父组件接收到按钮子组件的点击事件, 触发自己的登录函数'); 
            // // 登录请求就需要 用户名和密码的数据
            // // 这里直接通过 this.username / this.password 拿到用户输入数据
            // console.log('用户名', this.username);
            // console.log('密码', this.password); 
            if(!this.username || !this.password){
              this.$toast.fail('请输入完整信息')
              return
            }
            var regExpUsername= new RegExp(this.ruleUsername)
            if(!regExpUsername.test(this.username)){
              this.$toast.fail('账户信息格式错误')
              return
            }
            var regExpPassword= new RegExp(this.rulePassword)
            if(!regExpPassword.test(this.password)){
              this.$toast.fail('密码格式错误')
              return
            }

            // 真正发送登录请求
            this.$axios({
              url:'http://127.0.0.1:3000/login',
              method:'post',
              data:{
                username:this.username,
                password:this.password
              }
            }).then(res=>{
              const {message,data} =res.data
              console.log(message);
              console.log(data);
              if(message=='登录成功'){
                this.$toast.success(message)
              }else{
                this.$toast.fail(message)
              }
            })
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