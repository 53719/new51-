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

    <NavBar LabelText="昵称" :descText="userInfo.nickname" />
    <NavBar LabelText="密码" descText="*****" />
    <NavBar LabelText="性别" :descText="userInfo.gender==1?'男':'女'" />
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
      userInfo: null
    };
  },
  created() {
    // 这个钩子函数是创建完毕，数据准备完毕，但是 dom 还没有
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
  methods: {
    token2(){
        this.$router.replace({path:'/personal'})
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