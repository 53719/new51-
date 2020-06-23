<template>
  <div>
       <div class="closeWrapper">
        <a href="/" class="iconfont iconicon-test"></a>
    </div>
    <div class="logoWrapper">
        <span class="iconfont iconnew"></span>
    </div>
    <AuthInput
        textPlaceholder="用户名手机号码"
        type="text"
        rule="\d{5,11}"
        errMsg="请输入正确的手机号"
        @valChanged="setUsername"
    />

    <AuthInput
        textPlaceholder="昵称"
        type="text"
        rule="\w{5,11}"
        errMsg="请输入正确昵称"
        @valChanged="setNickname"
    />

    <AuthInput
        textPlaceholder="密码"
        type="password"
        rule=".{3,9}"
        errMsg="请输入三到九位的密码"
        @valChanged="setPassword"
    />

    <AuthBtn btnText="注册" @clicked="register"/>
  </div>
</template>

<script>
import AuthInput from '@/components/AuthInput'
import AuthBtn from '@/components/AuthBtn'

export default {
    components: {
        AuthInput,
        AuthBtn
    },
    data() {
        return {
            username: '',
            nickname: '',
            password: ''
        }
    },
    methods: {
        setUsername(username) {
            this.username = username
        },
        setNickname(nickname) {
            this.nickname = nickname
        },
        setPassword(password) {
            this.password = password
        },
        register() {
            console.log('点击了注册按钮');
            console.log('用户名',this.username);
            console.log('昵称',this.nickname);
            console.log('密码',this.password);
            
            
        }
    }
}
</script>

<style lang="less" scoped>
.closeWrapper {
    padding: 6.667vw 6.667vw 0;
    .iconicon-test {
        font-size: 7.5vw;
    }
}
.logoWrapper {
    text-align: center;
    .iconnew {
        font-size: 35vw;
        color: #d81e06;
    }
}
</style>