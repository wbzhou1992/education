<template>
  <div class="hello">
    <input v-model="currentValue">
  </div>
</template>

<script>
export default {
  name: "base",
  props:['value'],
  data() {
    return {
     currentValue:this.value
      }
    }

}
</script>

<style lang="less">

</style>
