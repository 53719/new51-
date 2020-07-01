<template>
  <div>
    <button @click="addFollow(1)">添加关注用户1</button>
    <button @click="addFollow(2)">添加关注用户2</button>
    <button @click="addFollow(3)">添加关注用户3</button>
    <button @click="addFollow(4)">添加关注用户4</button>
    <button @click="addFollow(5)">添加关注用户5</button>
    <button @click="addFollow(6)">添加关注用户6</button>

    <button @click="addStar(1)">添加收藏1</button>
    <button @click="addStar(2)">添加收藏2</button>
    <button @click="addStar(3)">添加收藏3</button>
    <button @click="addStar(4)">添加收藏4</button>
    <button @click="addStar(5)">添加收藏5</button>

    <br>
    <br>
    <br>
    <br>
     <!-- 遍历评论列表用评论子组件渲染每条评论 -->
    <Comment :commentData="comment" v-for="(comment,index) in commentList" :key="index"/>
  </div>
  
</template>

<script>
import Comment from '@/components/comment/index'
export default {
  components:{
    Comment
  },
  data () {
    return {
      commentList:[
        // 这里是评论列表, 数组里面每一个对象都是一条评论
        {
          content:'6666',
          parent: {
            content: '你家有几套房啊?'
          }
        },
        {
          content:'牛皮'
        },
        {
          content:'火钳刘明'
        },
        {
          content:'一giao我里giao giao'
        },
        {
          content: '你家有几套房啊?'
        },
        {
          content: '从前有座山'
        },
        {
          content: '山上有座庙',
          parent: {
            content: '从前有座山'
          },
        }
      ]
    }
  },


  methods: {
    addFollow(id) {
      this.$axios({
        url: "/user_follows/" + id,
        method: "get"
      }).then(res => {
        console.log(res.data);
      });
    },
    addStar(id) {
      this.$axios({
        url: "/post_star/" + id,
        method: "get"
      }).then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>