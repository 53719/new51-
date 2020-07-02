<template>
  <div>
      
      <div class="parentComment">
        <Parent 
            :parentDepth="parentDepth-1" 
            :parentData="parentData.parent" 
            v-if="parentData.parent"
            @parentCallReply="diguiCallReply"
        />

          <div class="info">
              <div class="user">
                  {{parentDepth}} {{parentData.user.nickname}}
                  2 小时前
              </div>
              <div class="btnReply" @click="parentCallReply">
                  回复
              </div>
          </div>

          <div class="content">
            {{parentData.content}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Parent',
    props: ['parentData', 'parentDepth'],
    methods: {
        parentCallReply() {
            this.$emit('parentCallReply', {
                id: this.parentData.id,
                nickname: this.parentData.user.nickname
            })
        },
        diguiCallReply(parentInfo){
            this.$emit('parentCallReply', parentInfo)
        }
    }
}
</script>

<style lang="less" scoped>
.parentComment {
    font-size: 3.889vw;
    color: #888;
    padding: 2.778vw;
    border: 0.278vw solid #888;
}
.info {
    display: flex;
    justify-content: space-between;
    .btnReply {
        font-size: 3.333vw;
    }
}
.content {
    padding: 2.778vw 0;
}
</style>