<template>
  <div class="btnWrapper">
    <button @click="handleClick">{{btnText}}</button>
  </div>
</template>

<script>
export default {
    props: ['btnText'],
    methods: {
        handleClick() {
            console.log('按钮子组件被点击了');
            this.$emit('clicked')
        }
    }
};
</script>

<style lang="less" scoped>
.btnWrapper {
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