<template>
  <div>
    <HomeHeader />

    <van-tabs v-model="activeTab">
      <van-tab :title="category.name" v-for="category in categoriesList" :key="category.id">
        <div v-for="post in postList" :key="post.id">{{post.title}}</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
export default {
  components: {
    HomeHeader
  },
  data() {
    return {
      activeTab: 0,
      categoriesList: [],
      postList: []
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
      this.getPost();
    }
  },

  methods: {
        getCategories() {
      this.$axios({
        url: '/category'
      }).then(res=>{
        console.log(res.data);
        this.categoriesList = res.data.data
        // 只有获取完了栏目数据, 才可以开始获取文章数据
        // 获取文章需要发送一个 ajax 请求, 建议另外封装函数
        this.getPost()
      })
    },
    getPost() {

      this.$axios({
        url: "/post",
        params: {
          category: this.categoryId
        }
      }).then(res => {
        console.log(res.data);
        this.postList = res.data.data;
      });
    }
  }
};
</script>
<style scoped lang='less'>
</style>>

