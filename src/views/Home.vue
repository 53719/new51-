<template>
  <div>
    <HomeHeader />

    <van-tabs v-model="activeTab">
      <van-tab :title="category.name" v-for="category in categoriesList" :key="category.id">
        <!-- <PostItem :postData="post" v-for="post in category.postList" :key="post.id" /> -->
        <van-list
          v-model="category.loading"
          :finished="category.finished"
          @load="loadMorePost"
          :immediate-check="false"
        >
          <PostItem :postData="post" v-for="post in category.postList" :key="post.id" />
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import PostItem from "@/components/PostItem";
export default {
  components: {
    HomeHeader,
    PostItem
  },
  data() {
    return {
      activeTab: 0,
      categoriesList: [],
      postList: [],
      pageIndex: 1,
      pageSize: 6,
      loading: false,
      finished: false
    };
  },

  created() {
    //页面创建之后,获取栏目
    this.getCategories();
  },
  computed: {
    categoryId() {
      // 当前激活分类,是在分类列表中拿出当前激活的索引
      const currentCategory = this.categoriesList[this.activeTab];
      // 从中获取 id
      return currentCategory.id;
    }
  },
  watch: {
    activeTab() {
      // this.getPost();
      // 之前每次当前激活索引发生改变都会发送请求,
      // 现在因为每个栏目自己管理文章, 就可以通过判断当前栏目是否有文章
      // 来确认是否需要发送请求
      const currentCategory = this.categoriesList[this.activeTab];
      if (currentCategory.postList.length == 0) {
        this.getPost();
      }
    }
  },

  methods: {
    getCategories() {
      this.$axios({
        url: "/category"
      }).then(res => {
        console.log(res.data);
        // this.categoriesList = res.data.data
        // 只有获取完了栏目数据, 才可以开始获取文章数据
        // 获取文章需要发送一个 ajax 请求, 建议另外封装函数
        const newData = res.data.data.map(category => {
          return {
            ...category,
            postList: []
          };
        });
        this.categoriesList = newData;
        console.log(this.categoriesList);

        this.getPost();
      });
    },
    loadMorePost() {
      // 读取更多文章, 实际上
      // 就是将当前栏目的 pageIndex 加一
      // 发送文章获取请求即可
      console.log('加载下一页');
      
      const currentCategory = this.categoriesList[this.activeTab]
      currentCategory.pageIndex += 1
      this.getPost();
    },
    getPost() {
      const currentCategory = this.categoriesList[this.activeTab];
      this.$axios({
        url: "/post",
        params: {
          category: this.categoryId,
          pageIndex: currentCategory.pageIndex,
          pageSize: currentCategory.pageSize
        }
      }).then(res => {
        console.log(res.data);
        // this.postList = res.data.data;
        // const currentCategory = this.categoriesList[this.activeTab]
        // currentCategory.postList = res.data.data;
         currentCategory.postList = [...currentCategory.postList, ...res.data.data]
      });
    }
  }
};
</script>
<style scoped lang='less'>
</style>>

