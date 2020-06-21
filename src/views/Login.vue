<template>
  <div>
    <div class="closeWrapper">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logoWapper">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="inputWapper">
      <input type="text" />
    </div>
    <div class="inputWapper">
      <input type="text" />
    </div>
    <div class="butWapper">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.closeWrapper {
  padding: 6.667vw 6.667vw 0;
  iconicon-test {
    font-size: 7.5vw;
  }
}
.iconnew {
  font-size: 50vw;
  color: red;
  margin-left: 25vw;
}
.inputWapper {
  padding: 0 6.667vw;
  input {
    font-size: 5vw;
    line-height: 16.667vw;
    outline: none;
    border: none;
    border-bottom: 1px solid #333;
    width: 100%;
  }
}
.butWapper {
  text-align: center;
  margin-top: 16.667vw;
  button {
    width: 88.333vw;
    height: 13.333vw;
    background-color: #cc3300;
    color: white;
    font-size: 5vw;
    border: none;
    border-radius: 6.667vw;
  }
}
</style>