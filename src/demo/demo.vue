<template>
  <div class="hello">
    <vbase v-model="name"></vbase>
  </div>
</template>

<script>
import vbase from './base.vue'
export default {
  name: "demo",
  data() {
    return {
      name:123
      }
    },

    components:{
        vbase
    }
}
</script>

<style lang="less">

</style>
