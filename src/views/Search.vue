<template>
  <div>
    <div class="topsearch">
      <span class="iconfont iconjiantou2" @click="goBack"></span>
      <div class="searchBox">
        <span class="iconfont iconsearch"></span>
        <input type="text" v-model="keyword" placeholder="请输入关键字" />
      </div>
      <div class="btn" @click="search">搜索</div>
    </div>

    <div class="suggestions" v-if="results.length == 0">
      <h2 class="title">历史搜索</h2>
      <div class="history list">
        <div
          @click="sendSuggestion(item)"
          class="item"
          v-for="(item,index) of history"
          :key="index"
        >{{item}}</div>
      </div>
      <h2 class="title">热门搜索</h2>
      <div class="hot list">
        <div
          @click="sendSuggestion(item)"
          class="item"
          v-for="(item,index) of hot"
          :key="index"
        >{{item}}</div>
      </div>
    </div>

    <div class="results">
      <PostItem :postData="item" v-for="item in results" :key="item.id" />
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem
  },
  data() {
    return {
      keyword: "",
      results: [],
      // 1. 一个管理历史的数组
      history: [],
      hot: ["美女", "阿信", "华为"]
    };
  },
  created() {
    const historyStorage = localStorage.getItem("history");
    if (historyStorage) {
      this.history = JSON.parse(historyStorage);
    }
  },
  watch: {
    keyword(newVal) {
      if (!newVal) {
        this.results = [];
      }
    },
    history() {
            // 3. 监听到历史发生变化, 存放到本地储存
            localStorage.setItem('history', JSON.stringify(this.history))
        }
  },
  methods: {
    search() {
      if (!this.keyword) {
        return;
      }
      this.$axios({
        url: "/post_search",
        params: {
          keyword: this.keyword
        }
      }).then(res => {
        console.log(res.data);

        // 2. 搜索成功时, 如果当前关键词
        // 还没有记录到历史中, 就放进去
        if (this.history.indexOf(this.keyword) == -1) {
          this.history.push(this.keyword);
        }
        console.log("当前历史记录");
        console.log(this.history);
        this.results = res.data.data;
      });
    },
    sendSuggestion(item) {
      (this.keyword = item), this.search();
    },
    goBack() {
      if (this.results.length == 0) {
        //如果本来就是没有结果,才返回上一页
        this.$route.back();
      } else {
        // 如果已经有搜索结果就应该只是清空结果
        // 还是留在搜索页
        this.keyword = "";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.topsearch {
  display: flex;
  padding: 2.222vw 5.556vw;
  align-items: center;
  color: #333;
  .searchBox {
    flex: 1;
    border: 0.278vw solid #888;
    border-radius: 5.556vw;
    margin: 0 5.556vw;
    height: 10.556vw;
    align-items: center;
    padding: 0 2.778vw;
    .iconsearch {
      margin-right: 2.778vw;
      line-height: 10.556vw;
    }
    input {
      border: none;
    }
  }
  .btn {
    font-size: 3.889vw;
  }
}
.suggestions {
  padding: 20px;
  .title {
    font-size: 16px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
  }
  .item {
    margin: 0 5px;
    padding: 5px 5px;
  }
}
</style>