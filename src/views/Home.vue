<template>
  <div class="home">
    <vHeader></vHeader>
    <div class="log-box">
      <HomeLogin class="log"></HomeLogin>
    </div>
    <Swiper class="cf"></Swiper>
    <CourseSetting></CourseSetting>
    <CourseVideo></CourseVideo>
    <NewsCenter></NewsCenter>
    <CourseCenter></CourseCenter>
    <FreeCourse></FreeCourse>
    <TeacherTeam></TeacherTeam>
    <ServiceTeam></ServiceTeam>
    <TeacherFeature></TeacherFeature>
    <History></History>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import vHeader from './Header.vue'
import Swiper from '@/components/Swiper.vue'
import HomeLogin from '@/components/HomeLogin.vue'
import CourseSetting from '@/components/CourseSetting.vue'
import NewsCenter from '@/components/NewsCenter.vue'
import CourseCenter from '@/components/CourseCenter.vue'
import FreeCourse from '@/components/FreeCourse.vue'
import TeacherTeam from '@/components/TeacherTeam.vue'
import ServiceTeam from '@/components/ServiceTeam.vue'
import TeacherFeature from '@/components/TeacherFeature.vue'
import History from '@/components/History.vue'
import Footer from './Footer.vue'
import CourseVideo from '@/components/CourseVideo.vue'
export default {
  name: 'home',
  components: {
    vHeader,
    Swiper,
    HomeLogin,
    CourseSetting,
    NewsCenter,
    CourseCenter,
    FreeCourse,
    TeacherTeam,
    ServiceTeam,
    TeacherFeature,
    History,
    Footer,
    CourseVideo
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
