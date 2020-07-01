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

    <Digui num='10'/>
  </div>
  
</template>

<script>
import Digui from  "@/components/Digui"
export default {
  components:{
    Digui
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