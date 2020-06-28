<template>
  <div>
    <TopNav titleText="我的关注" />
    <div class="list">
      <div class="item" v-for="(item,index) in followsList" :key="item.id">
        <img class="avatar" v-if="item.head_img" :src="$axios.defaults.baseURL + item.head_img" alt />
        <img class="avatar" v-else src="@/assets/logo.png" alt />
        <div class="info">
          <div class="name">{{item.nickname}}</div>
          <div class="date">{{item.create_date.split('T')[0]}}</div>
        </div>
        <div v-if="item.isFollow" class="btnUnfollow" @click="unfollow(item.id, index)">取消关注</div>
        <div v-else class="btnFollow" @click="follow(item.id, index)">关注</div>
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
  // 页面一开始就要加载数据
  // 数据的获取可以放在
  // created / mounted 都可以
  created() {
    this.loadPage();
  },
  methods: {
    loadPage() {
      this.$axios({
        url: "/user_follows"
        // method: 'get'
      }).then(res => {
        console.log(res.data);
        // 获取关注数据的时候, 所有结果数组中的用户,
        // 都是我已经关注的, 但是我希望一旦点击取消
        // 就会在这个用户上添加标记, 方便我的重新关注
        // 这种情况下,获取到的数据本身属性并不满足我们的需求,
        // 就可以在这直接改造
        // 但是请注意,改造必须在赋值之前完成,
        // 因为如果是整体赋值, vue 会响应式更新
        // 但是如果是赋值以后, 再单独修改对象里面的某个数据
        // this.followsList = res.data.data;
        // 1. 用一个映射生成相同的用户列表
        console.log(res.data.data);

        const newData = res.data.data.map(user => {
          return { ...user, isFollow: true };
        });

        console.log(newData);

        this.followsList = newData;
      });
    },
    unfollow(id, index) {
      this.$axios({
        url: "/user_unfollow/" + id
      }).then(res => {
        console.log(res.data);
        // 之前取消关注成功,直接重新获取数据
        // this.loadPage();
        // 现在只需要改造当前的关注列表即可
        this.followsList[index].isFollow = false;
      });
    },
    follow(id, index) {
      this.$axios({
        url: "/user_follows/" + id,
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.followsList[index].isFollow = true;
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
  .btnFollow {
    font-size: 3.333vw;
    background: red;
    padding: 0 2.778vw;
    height: 8.333vw;
    line-height: 8.333vw;
    border-radius: 4.167vw;
    color: white;
  }
}
</style>