<template>
  <div class="commentWrapper">
    <div class="enable" v-if="isShowTextarea">
      <textarea
        rows="3"
        ref="textarea"
        @blur="hideTextarea"
        v-model="content"
        :placeholder="placeholderText"
      ></textarea>
      <div class="btnSend" @click="send">发送</div>
    </div>

    <div class="disable" v-if="!isShowTextarea">
      <input type="text" @focus="showTextarea" :value="content" :placeholder="placeholderText" />
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
      content: ""
    };
  },
  props: ["parentInfo"],
  computed: {
    placeholderText() {
      if (this.parentInfo.nickname) {
        return "回复@" + this.parentInfo.nickname;
      } else {
        return "写评论";
      }
    }
  },
  methods: {
    showTextarea() {
      // 1. 将数据改为 true 让输入框弹出
      this.isShowTextarea = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    hideTextarea() {
      setTimeout(() => {
        this.isShowTextarea = false;
      }, 50);
    },
    send() {
      console.log(this.$route.params.id);
      console.log(this.content);

      // 现在我们可能有 parentId 也可能没有
      // data 不能直接写死
      let data = {
        content: this.content
      };
      if (this.parentInfo.id) {
        data.parent_id = this.parentInfo.id;
      }

      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
        method: "post",
        data
      }).then(res => {
        console.log(res.data);
        if (res.data.message == "评论发布成功") {
          // 优化1. 提醒父页面更新评论数据
          this.$emit("reloadComment");
          this.content = "";
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.commentWrapper {
  position: fixed;
  bottom: 50px;
  left: 0;
  background: #f2f2f2;
  width: 100%;
  padding: 10.001px;
  box-sizing: border-box;
  .disable {
    display: flex;
    justify-content: space-between;
    input {
      width: 180px;
      height: 29.999px;
      line-height: 29.999px;
      background-color: #d7d7d7;
      border: none;
      outline: none;
      border-radius: 15.001px;
      padding: 0 15.001px;
      box-sizing: border-box;
    }
    .iconfont {
      font-size: 6.111vw;
    }
    .pinglunWrapper {
      position: relative;
      .num {
        position: absolute;
        font-size: 11.999px;
        background: red;
        color: white;
        line-height: 14px;
        height: 14px;
        border-radius: 6.998px;
        padding: 0 4px;
        top: -5px;
        left: 6.001px;
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
      border-radius: 2.778vw;
      padding: 3.333vw;
      resize: none;
    }
    .btnSend {
      height: 7.222vw;
      line-height: 7.222vw;
      font-size: 3.333vw;
      border-radius: 3.611vw;
      padding: 0 4.444vw;
      color: white;
      background: red;
      margin: 6.944vw 2.778vw;
    }
  }
}
</style>