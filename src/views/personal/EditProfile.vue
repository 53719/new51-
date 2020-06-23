<template>
  <div>
    <div class="profile">
      <a href="#" class="iconfont iconjiantou2" @click="token2"></a>
      <h5>编辑资料</h5>
    </div>
    <img src="@/assets/logo1.png" alt />
    <NavBar LabelText="昵称" descText="火星网友"/>
    <NavBar LabelText="密码" descText="*****"/>
    <NavBar LabelText="性别" descText="男"/>
  </div>
</template>

<script>
import NavBar from "@/components/Nabbar";
export default {
  components: {
    NavBar
  },
  methods:{
      token2(){
          this.$router.replace({path:'/index'})
      }
  }
};
</script>

<style lang="less" scoped>
.profile {
  display: flex;
  flex-direction:row;
  padding: 6.667vw;
  h5{
     padding-left: 30vw;
  }
}
img{
    width: 30vw;
    height: 30vw;
    padding:5vw 35vw;
    border-radius: 50%;
}
</style>