<template>
  <div>
    <TopNav titleText="栏目管理" />
    <div class="mainWrapper">
      <h2>点击删除以下频道</h2>
      <div class="enable list">
        <div class="item" v-for="item in enableList" :key="item.id">{{item.name}}</div>
      </div>
      <h2>点击添加以下频道</h2>
      <div class="list disable"></div>
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
      enableList: []
    };
  },
  created() {
    this.$axios({
      url: "/category"
    }).then(res => {
      console.log(res.data);
      this.enableList = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.mainWrapper {
  padding: 20px;
}
h2 {
  font-size: 14px;
  font-weight: normal;
}
.list {
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 5px 8px;
    padding: 10px;
    border: 1px solid #888;
  }
}
</style>