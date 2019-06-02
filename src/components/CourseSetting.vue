<template>
  <div class="coursetting">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <i></i>
          <a>
            <h3>{{item.name}}</h3>
            <span>{{item.meta}}</span>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {name: '教学管理',meta:'Teacher Management'},
        {name: '教学设施',meta:'Realtime Teaching'},
        {name: '免费课程',meta:'Free Courses'},
        {name: '售后服务',meta:'After Service'},
        {name: '教育研究院',meta:'Institute of Education'}
      ]
    }
  }
}
</script>

<style lang="less">
.coursetting{
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
      margin-top: 24px;
      margin-bottom: 20px;
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
