<template>
  <div class="teacherfeature">
    <div class="wrap">
      <h2>讲师团队</h2>
      <div class="teacherfeaturebox">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <i></i>
            <span>{{item.name}}</span>
            <em></em>
            <p>{{item.meta}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {name:'在线视频',meta:'可互动可随时提问 ,还有快速更新的直播课程'},
        {name:'题型专练',meta:'对难点考点划分专项,智能算法不懂的反复练习'},
        {name:'模拟试题',meta:'12年经验累积出题,考前预测，名家解析'},
        {name:'讲师团队',meta:'可互动可随时提问 ,还有快速更新的直播课程'},
        {name:'1对1班主任',meta:'专属于你的贴心服务,快速高效解决疑难问题'},
        {name:'离线缓存',meta:'缓存后无限次观看 反复学习加深记忆'},
        {name:'历年真题',meta:'做题后即刻形成答卷分析,多个科目真题全覆盖'},
        {name:'考试管理',meta:'考试倒计时及学习记录等,根据时间安排学习进度'}
      ]
    }
  }
}
</script>

<style lang="less">
.teacherfeature {
  width: 100%;
  padding: 0 30px 30px;
  background: #f4f4f4;
  overflow: hidden;
  min-width: 1200px;
  .wrap {
      width: 1200px;
      margin: 0 auto;
      padding-top: 30px;
      h2 {
      color: #333;
      font-size: 20px;
      margin: 14px 0;
      text-align: left;
      font-weight: bold;
    }

    .teacherfeaturebox{
      
    ul{
      background: #fff;
      height: 455px;
      li{
        float: left;
        width:24%;
        margin-right: 15px;
        padding: 20px 0;
        text-align: center;
        height: 233px;
        position: relative;
        &:hover{
          box-shadow: 0 14px 22px rgba(0, 0, 0, 0.1);
          transform: translateY(-10px);
        }
        &:after{
          content: "";
          display: inline-block;
          position: absolute;
          height: 100px;
          background: #eee;
          width: 1px;
          right: -3px;
          top:60px;
        }
        i{
          display: block;
          width: 33px;
          height: 33px;
          background: url(./images/feature.png) no-repeat;
          margin: 20px auto;
        }
        span{
          font-size: 16px;
          display: block;
        }
        em{
          display: block;
          height: 2px;
          width: 40px;
          background:#666;
          margin: 20px auto;
        }
        p{
          font-size: 12px;
        }
        &:nth-child(1){
          i{
            background-position: -87px -39px;
          }
        }
        &:nth-child(2){
          i{
            background-position:-130px -39px;
          }
        }
        &:nth-child(3){
          i{
            background-position: -169px -39px;
          }
        }
        &:nth-child(4){
          margin-right: 0;
          &:after{
            content: "";
            display: inline-block;
            position: absolute;
            height: 100px;
            background: #eee;
            width: 0;
            right: -3px;
            top:60px;
          }
          i{
            background-position: -214px -39px;
          }
        }
        &:nth-child(5){
          i{
            background-position: -87px -81px;
          }
        }
        &:nth-child(6){
          i{
            background-position: -130px -81px;
          }
        }
        &:nth-child(7){
          i{
            background-position: -171px -81px;
          }
        }
        &:nth-child(8){
          i{
            background-position: -214px -81px;
          }
          margin-right: 0;
          &:after{
            content: "";
            display: inline-block;
            position: absolute;
            height: 100px;
            background: #eee;
            width: 0;
            right: -3px;
            top:60px;
          }
        }
      }
    }
    }
    
   
  }
}

</style>
