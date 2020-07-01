<template>
  <div>
      <div class="mainComment">
           {{commentData.content}}
      </div>
  </div>
</template>

<script>
export default {
    props:['commentData']
}
</script>

<style lang="less" scoped>

</style>