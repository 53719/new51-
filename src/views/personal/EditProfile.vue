<template>
  <div v-if="userInfo">
    <div class="profile">
      <span  class="iconfont iconjiantou2" @click="token2"></span>
      <h5>编辑资料</h5>
    </div>
    <div>
      <img
        v-if="userInfo.head_img"
        :src="$axios.defaults.baseURL + userInfo.head_img"
        alt
        class="avatar"
      />
      <img v-else src="@/assets/logo1.png" alt class="avatar" />
    </div>

    <NavBar LabelText="昵称" :descText="userInfo.nickname"  @barClick="shownickname = true"/>
    <NavBar LabelText="密码" descText="*****" @barClick="showpassword = true"/>
    <NavBar LabelText="性别" :descText="userInfo.gender==1?'男':'女'" />

    <!-- 这里是专门放弹窗组件的地方 -->
    <van-dialog v-model="shownickname" title="昵称修改" show-cancel-button @confirm="setNewNickname">
       <van-field v-model="newNickname" placeholder="请输入新昵称"/> 
    </van-dialog>
    <van-dialog v-model="showpassword" title="密码修改" show-cancel-button @confirm="setNewpassword">
       <van-field v-model="newpassword" placeholder="请输入新密码"/> 
    </van-dialog>
  </div>
</template>

<script>
import NavBar from "@/components/Nabbar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      userInfo: null,
      shownickname:false,
      newNickname:'',
      showpassword:false,
      newpassword:'',
    };
  },
  created() {
    this.loadpage()
  },
  methods: {
    loadpage(){
       // 这个钩子函数是创建完毕，数据准备完毕，但是 dom 还没有
       // 封装页面加载新数据的函数 方便调用
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      const { message, data } = res.data;
      if (message == "获取成功") {
        this.userInfo = data;
        console.log(this.userInfo);
      }
    });
    },
    token2(){
        this.$router.replace({path:'/personal'})
    },
    setNewNickname(){
      console.log('输入的内容是',this.newNickname);
      this.$axios({
        url:'/user_update/'+localStorage.getItem('userId'),
        method:'post',
        data:{
          nickname:this.newNickname
        },
        headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
        },
      }).then(res=>{
        console.log(res.data);
        //直接赋值是一种可行的方法
        // this.userInfo.nickname=this.newNickname
        //还是建议修改完从远处获取一次新数据
        if(res.data.message=='修改成功'){
          this.loadpage()
        }
      })
    },
    setNewpassword(){
      console.log('新密码');
       this.$axios({
        url:'/user_update/'+localStorage.getItem('userId'),
        method:'post',
        data:{
          password:this.newpassword
        },
        headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
        },
      }).then(res=>{
        console.log(res.data);
        //直接赋值是一种可行的方法
        // this.userInfo.nickname=this.newNickname
        //还是建议修改完从远处获取一次新数据
        if(res.data.message=='修改成功'){
          this.loadpage()
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.profile {
  display: flex;
  flex-direction: row;
  padding: 6.667vw;
  h5 {
    padding-left: 30vw;
  }
}
img {
  width: 30vw;
  height: 30vw;
  padding: 5vw 35vw;
  border-radius: 50%;
}
</style>