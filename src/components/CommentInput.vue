<template>
  <div class="commentWrapper">
    <div class="enable" v-if="isShowTextarea">
      <textarea rows="3" ref="textarea" @blur="hideTextarea" v-model="content"></textarea>
      <div class="btnSend" @click="send">发送</div>
    </div>

    <div class="disable" v-if="!isShowTextarea">
      <input type="text" @focus="showTextarea" :value="content" />
      <div class="pinglunWrapper">
        <span class="iconfont iconpinglun-"></span>
        <div class="num">520</div>
      </div>
      <span class="iconfont iconshoucang"></span>
      <span class="iconfont iconfenxiang"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowTextarea: false,
      content: ''
    };
  },
  methods: {
    showTextarea() {
      // 1. 将数据改为 true 让输入框弹出
      this.isShowTextarea = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    hideTextarea(){
        setTimeout(()=>{
             this.isShowTextarea = false
        },50)
    },
    send(){
        console.log(this.$route.params.id);
        console.log(this.content);
        
        this.$axios({
            url:'/post_comment/'+this.$route.params.id
        }).then(res=>{
            console.log(res.data);
            
        })
    }
  }
};
</script>

<style lang="less" scoped>
.commentWrapper {
  position: fixed;
  bottom: 13.889vw;
  left: 0;
  background: #f2f2f2;
  width: 100%;
  padding: 2.778vw;
  box-sizing: border-box;
  .disable {
    display: flex;
    justify-content: space-between;
    input {
      width: 50vw;
      height: 8.333vw;
      line-height: 8.333vw;
      background-color: #d7d7d7;
      border: none;
      outline: none;
      border-radius: 4.167vw;
      padding: 0 4.167vw;
      box-sizing: border-box;
    }
    .iconfont {
      font-size: 22px;
    }
    .pinglunWrapper {
      position: relative;
      .num {
        position: absolute;
        font-size: 3.333vw;
        background: red;
        color: white;
        line-height: 3.889vw;
        height: 3.889vw;
        border-radius: 1.944vw;
        padding: 0 1.111vw;
        top: -1.389vw;
        left: 1.667vw;
      }
    }
  }
  .enable {
    display: flex;
    align-items: flex-end;
    textarea {
      flex: 1;
      background-color: #d7d7d7;
      border: none;
      outline: none;
      border-radius: 10px;
      padding: 12px;
      resize: none;
    }
    .btnSend {
      height: 26px;
      line-height: 26px;
      font-size: 12px;
      border-radius: 13px;
      padding: 0 16px;
      color: white;
      background: red;
      margin: 0 10px;
    }
  }
}
</style>