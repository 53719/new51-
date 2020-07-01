<template>
  <div>
        <div class="parentComment">
          {{parentData.content}}
      </div>
  </div>
</template>

<script>
export default {
 props: ['parentData']
}
</script>

<style lang="less" scoped>
.parentComment {
    font-size: 14px;
    color: #888;
    padding: 10px;
    margin: 10px;
    border: 1px solid #e4e4e4;
}
</style>