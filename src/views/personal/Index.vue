<template>
  <div>
    <div class="profile" v-if="userInfo">
      <img
        v-if="userInfo.head_img"
        :src="$axios.defaults.baseURL + userInfo.head_img"
        alt
        class="avatar"
      />
      <img v-else src="@/assets/logo1.png" alt class="avatar" />
      <div class="info">
        <div class="name">
          <span class="iconfont iconxingbienan" v-if="userInfo.gender ==1"></span>
          <span class="iconfont iconxingbienv" v-else></span>
          {{userInfo.nickname}}
        </div>
        <div class="data">{{userInfo.create_date.split('T')[0]}}</div>
      </div>
      <span class="iconfont iconjiantou1" @click="$router.push('/edit')"></span>
    </div>

    <div>
      <NavBar LabelText="我的关注" descText="关注的用户" @barClick="$router.push('/follows')" />
      <NavBar LabelText="我的跟帖" descText="发布的所有回复" @barClick="handleBar('回复')" />
      <NavBar LabelText="我的收藏" descText="文章/视频" @barClick="$router.push('/star')" />
      <NavBar LabelText="设置" descText @barClick="handleBar('设置')" />
    </div>
    <AuthBtn btnText="注销/退出" @clicked="logout()" />
  </div>
</template>

<script>
import NavBar from "@/components/Nabbar";
import AuthBtn from "@/components/AuthBtn";
export default {
  data() {
    return {
      userInfo: null
    };
  },
  components: {
    NavBar,
    AuthBtn
  },
  mounted() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      console.log(res.data);
      const { message, data } = res.data;
      if (message == "获取成功") {
        this.userInfo = data;
        console.log(this.userInfo);
      }
    });
  },

  methods: {
    handleBar(pagename) {
      console.log(pagename);
    },
    logout() {
      //清理数据
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      //跳转
      this.$router.replace("/login");
    },
  }
};
</script>

<style lang="less" scoped>
.profile {
  display: flex;
  align-items: center;
  padding: 6.667vw;
  .avatar {
    width: 19.444vw;
    height: 19.444vw;
    object-fit: cover;
    border-radius: 50%;
  }
  .info {
    flex: 1;
    padding-left: 2.778vw;
    font-size: 3.889vw;
    .name {
      .iconxingbienv {
        color: hotpink;
      }
      .iconxingbienan {
        color: #6fb0df;
      }
    }
    .data {
      padding-top: 1.389vw;
      color: gray;
    }
  }
}
</style>