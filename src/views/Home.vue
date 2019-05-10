<template>
  <div class="home">
    <login class="log"></login>
    <Swiper class="cf"></Swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue'
import login from '@/components/HomeLogin.vue'

export default {
  name: 'home',
  components: {
    Swiper,
    login
  }
}
</script>
<style lang="less">
.home{
  position: relative;
}
.log{
  position: absolute;
  right: 36px;
  top: 40px;
  z-index: 100;
}
</style>
