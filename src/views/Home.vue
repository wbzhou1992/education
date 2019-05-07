<template>
  <div class="home">
    <!-- <vHeader></vHeader> -->
    <login class="log"></login>
    <!-- <Swiper class="cf"></Swiper> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue'
import vHeader from './Header.vue'
import login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Swiper,
    vHeader,
    login
  }
}
</script>
<style lang="less">

</style>
