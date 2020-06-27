<template>
  <div>
    <TopNav titleText="我的关注" />
    <div class="list">
      <div class="item" v-for="item in followsList" :key="item.id">
        <img class="avatar" v-if="item.head_img" src="$axios.defaults.baseURL + item.head_img" alt />
        <img class="avatar" v-else src="@/assets/logo1.png" alt />
        <div class="info">
          <div class="name">{{item.nickname}}</div>
          <div class="data">{{item.create_date.split('T')[0]}}</div>
        </div>
        <div class="btnUnfollow" @click="unfollow(item.id)">取消关注</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
export default {
  components: {
    TopNav
  },
  data() {
    return {
      followsList: []
    };
  },
  // 页面一加载就开始加载数据
  created() {
    //封装渲染页面方便页面修改时调用
    this.loadPage();
  },
  methods: {
    loadPage() {
      this.$axios({
        url: "/user_follows"
      }).then(res => {
        console.log(res.data);
        this.followsList = res.data.data;
      });
    },
    unfollow(id) {
      this.$axios({
        url: "/user_unfollow/" + id
      }).then(res => {
        console.log(res.data);
        this.loadPage();
      });
    }
  }
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  align-items: center;
  padding: 5.556vw 6.667vw;
  border-bottom: 1px solid #e4e4e4;
  .avatar {
    width: 11.111vw;
    height: 11.111vw;
    object-fit: cover;
    border-radius: 50%;
  }
  .info {
    flex: 1;
    padding: 0 2.778vw;
    .name {
      font-size: 4.444vw;
    }
    .date {
      font-size: 3.889vw;
      color: #bbb;
      padding-top: 1.111vw;
    }
  }
  .btnUnfollow {
    font-size: 3.333vw;
    background: #e4e4e4;
    padding: 0 2.778vw;
    height: 8.333vw;
    line-height: 8.333vw;
    border-radius: 4.167vw;
  }
}
</style>