<template>
  <div class="hello">
    <swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper">
      <swiper-slide class="slide1">
      </swiper-slide>
      <swiper-slide class="slide2">
      </swiper-slide>
      <swiper-slide class="slide3">
      </swiper-slide>
      <!-- 常见的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    const that = this;
    return {
      imgIndex: 1,
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex = this.realIndex - 1;
          }
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
    };
  }
};
</script>

<style lang="less">
.hello{
    height: 420px;
    position: relative;
    top: 0;
}
.swiper-wrap{
    height: 436px;
    img{
      position: relative;
      height: 436px;
    }
}
.slide1{
  height: 100%;
  width: 100%;
  background: url(./images/banner.jpg) no-repeat center top;
  background-size: cover;
}
.slide2{
    height: 100%;
  width: 100%;
  background: url(./images/banner.jpg) no-repeat center top;
  background-size: cover;
}
.slide3{
    height: 100%;
  width: 100%;
  background: url(./images/banner.jpg) no-repeat center top;
  background-size: cover;
}
</style>
