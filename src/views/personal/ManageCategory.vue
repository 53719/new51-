<template>
  <div>
    <TopNav titleText="栏目管理" />
    <div class="mainWrapper">
      <h2>点击删除以下频道</h2>
      <div class="enable list">
        <div
          class="item"
          v-for="(item,index) in enableList"
          :key="item.id"
          @click="disableCategory(index)"
        >{{item.name}}</div>
      </div>
      <h2>点击添加以下频道</h2>
      <div class="list disable">
        <div
          class="item"
          v-for="(item, index) in disableList"
          :key="item.id"
          @click="enableCategory(index)"
        >{{item.name}}</div>
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
      enableList: [],
      disableList: []
    };
  },
  watch: {
    enableList() {
      // 如果数组有变化 马上放入本地储存
      // 注意只能存放字符串 需要用JSON.stringify转换
      localStorage.setItem("enable", JSON.stringify(this.enableList));
    },
    disableList() {
      localStorage.setItem("disable", JSON.stringify(this.disableList));
    }
  },
  created() {
    //在监听器中 已经同步在本地
    //进入页面时,如果本地存储有数据,就直接拿出来恢复
    //如果没有才发送请求
    const enable = localStorage.getItem("enable");
    const disable = localStorage.getItem("disable");
    if (enable) {
      this.enableList = JSON.parse(enable);
      this.disableList = JSON.parse(disable);
    } else {
      this.$axios({
        url: "/category"
      }).then(res => {
        console.log(res.data);
        this.enableList = res.data.data;
      });
    }
  },
  methods: {
    disableCategory(index) {
      // 如果发现激活项只剩下一个, 就不在移除了
      if (this.enableList.length == 1) {
        return;
      }

      // 拿到了该转移位置的元素索引之后
      // 1. 将这个元素放入另一个数组中
      this.disableList.push(this.enableList[index]);
      // 2. 将这个元素在这个数组中删除
      this.enableList.splice(index, 1);
    },
    enableCategory(index) {
      this.enableList.push(this.disableList[index]);
      this.disableList.splice(index, 1);
    }
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