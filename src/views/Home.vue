<template>
  <div class="home">
    <div class="log-box">
      <login class="log"></login>
    </div>
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
.log-box{
  position: relative;
  width: 1200px;
  margin: 0 auto;

}
.log{
  position: absolute;
  right: 0;
  top: 40px;
  z-index: 100;
}
.cf{
  &:after{
            display: table;
            clear: both;
        }
}
</style>
