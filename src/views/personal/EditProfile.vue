<template>
  <div v-if="userInfo">
    <TopNav titleText="资料修改页" />
    <div class="box1">
      <img
        v-if="userInfo.head_img"
        :src="$axios.defaults.baseURL + userInfo.head_img"
        alt
        class="avatar"
      />
      <img v-else src="@/assets/logo1.png" alt class="avatar" />
      <van-uploader :after-read="uploadAvatar" />
    </div>

    <NavBar LabelText="昵称" :descText="userInfo.nickname" @barClick="shownickname = true" />
    <NavBar LabelText="密码" descText="*****" @barClick="showpassword = true" />
    <NavBar LabelText="性别" :descText="userInfo.gender==1?'男':'女'" @barClick="showGender = true" />

    <!-- 这里是专门放弹窗组件的地方 -->
    <van-dialog
      v-model="shownickname"
      title="昵称修改"
      show-cancel-button
      @confirm="editprofile({nickname:newNickname})"
    >
      <van-field v-model="newNickname" placeholder="请输入新昵称" />
    </van-dialog>
    <van-dialog
      v-model="showpassword"
      title="密码修改"
      show-cancel-button
      @confirm="editprofile({password:newpassword})"
    >
      <van-field v-model="newpassword" placeholder="请输入新密码" />
    </van-dialog>
    <!-- 性别菜单 -->
    <van-action-sheet v-model="showGender" :actions="genders" @select="setGender" cancel-text="取消" />
  </div>
</template>

<script>
import NavBar from "@/components/Nabbar";
import TopNav from "@/components/TopNav";
export default {
  components: {
    NavBar,
    TopNav
  },
  data() {
    return {
      userInfo: null,
      shownickname: false,
      newNickname: "",
      showpassword: false,
      newpassword: "",
      showGender: false,
      genders: [
        {
          name: "男",
          gender: 1
        },
        {
          name: "女",
          gender: 0
        }
      ]
    };
  },
  created() {
    this.loadpage();
  },
  methods: {
    loadpage() {
      this.$axios({
        url: "/user/" + localStorage.getItem("userId"),
        method: "get"
      }).then(res => {
        const { message, data } = res.data;
        if (message == "获取成功") {
          this.userInfo = data;
          console.log(this.userInfo);
        }
      });
    },
    editprofile(newData) {
      this.$axios({
        url: "/user_update/" + localStorage.getItem("userId"),
        method: "post",
        data: newData
      }).then(res => {
        console.log(res.data);
        //直接赋值是一种可行的方法
        // this.userInfo.nickname=this.newNickname
        //还是建议修改完从远处获取一次新数据
        if (res.data.message == "修改成功") {
          this.loadpage();
        }
      });
    },
    setGender(item) {
      // const dataObj={
      //   gender:item.gender
      // },
      this.editprofile({ gender: item.gender });
      //选择完毕之后隐藏弹出界面
      this.showGender = false;
    },
    uploadAvatar(fileObj) {
      var formData = new FormData();
      formData.append("file", fileObj.file);

      this.$axios({
        url: "/upload",
        method: "post",
        data: formData
      }).then(res => {
        console.log(res.data);
        const { message, data } = res.data;
        if (message == "文件上传成功") {
          this.editprofile({
            head_img: data.url
          });
        }
      });
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
.box1 {
  height: 38.889vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .avatar {
    width: 25.444vw;
    height: 25.444vw;
    border-radius: 50%;
  }
  .van-uploader {
    position: absolute;
    opacity: 0;
  }
}
</style>