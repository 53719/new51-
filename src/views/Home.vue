<template>
  <div class="home" >
    <router-link to="/login">登录页</router-link>
    <router-link to="/Register">注册页</router-link>
    <div v-for='(item,index) in list' :key="index">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      list:[]
    }
  },
  mounted(){
    this.$axios({
       url: 'http://liangwei.tech:3000/post',
       method:'get'
    }).then((res)=>{
      // 以前 jq 的 success 写在这里就 ok 了
      // 可以接收到请求结果 res
      // 我们想要的数据就在 res.data 里面
      console.log(res.data);
      // 对于这个接口来说, 文章的列表在 res.data.data 下面
      // 如果我想要渲染文章列表, 赋值到 data 属性中即可
      this.list = res.data.data
      
    })
    }
  
}
</script>
<style scoped lang='less'>
/* 可以限制css的影响范围 */
/* 只影响当前组件 */
.iconsearch{
  color: red;
  font-size: 30px;
}
</style>>

