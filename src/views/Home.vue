<template>
  <div class="home">
    <div class="log-box">
      <login class="log"></login>
    </div>
    <Swiper class="cf"></Swiper>
    <div class="feature">
      <ul>
        <li>
          <i></i>
          <a>
            <h3>教学管理</h3>
            <span>Teaching Management</span>
          </a>
        </li>
         <li>
          <i></i>
          <a>
            <h3>教学管理</h3>
            <span>Teaching Management</span>
          </a>
        </li> <li>
          <i></i>
          <a>
            <h3>教学管理</h3>
            <span>Teaching Management</span>
          </a>
        </li> <li>
          <i></i>
          <a>
            <h3>教学管理</h3>
            <span>Teaching Management</span>
          </a>
        </li> <li>
          <i></i>
          <a>
            <h3>教学管理</h3>
            <span>Teaching Management</span>
          </a>
        </li>
      </ul>
    </div>
    <NewsCenter></NewsCenter>
    <CourseCenter></CourseCenter>
    <FreeCourse></FreeCourse>
    <TeacherTeam></TeacherTeam>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue'
import login from '@/components/HomeLogin.vue'
import NewsCenter from '@/components/NewsCenter.vue'
import CourseCenter from '@/components/CourseCenter.vue'
import FreeCourse from '@/components/FreeCourse.vue'
import TeacherTeam from '@/components/TeacherTeam.vue'

export default {
  name: 'home',
  components: {
    Swiper,
    login,
    NewsCenter,
    CourseCenter,
    FreeCourse,
    TeacherTeam
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
.feature{
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  ul{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    li{
      width: 224px;
      border: 1px solid #ededed;
      height: 100px;
      margin: 24px 20px 20px 0px;
      padding: 28px 0 23px 17px;
      animation: slide 1s;
      animation-fill-mode:both;
      i{
        width: 40px;
        height: 40px;
        background: url(../assets/images/feature.png) no-repeat;
        float: left;
        vertical-align: middle;
      }
      a{
        float: left;
        text-align: left;
        padding-left: 20px;
        h3{
          font-size: 16px;
          color: #2a2a2a;
        }
        span{
          display: block;
          font-size: 12px;
          color: #b2b2b2;
          margin-top: 20px;
        }
      }
      &:nth-child(1){
        animation-delay: 0s;
          i{
            background-position: 0 0;
          }
        }
         &:nth-child(2){
           animation-delay: 0.05s;
          i{
            background-position: -80px 0
          }
        }
         &:nth-child(3){
           animation-delay: 0.1s;
          i{
            background-position: -160px 0
          }
        }
         &:nth-child(4){
           animation-delay: 0.15s;
          i{
            background-position:-240px 0;
          }
        }
         &:nth-child(5){
           animation-delay: 0.2s;
          i{
            background-position: -320px 0
          }
        }
    }
  }
}
@keyframes slide{
  from{
    transform: translate3d(100%,0,0);
    opacity: 0;
  }
  to{
    transform: none;
    opacity: 1;
  }
}
</style>
