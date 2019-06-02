<template>
  <div class="teacherfeature">
    <div class="wrap">
      <h2>消防课程中心</h2>
      <div class="teacherfeaturebox">
        <ul>
          <li>
            <i></i>
            <span>在线视频</span>
            <em></em>
            <p>班主任一对一管理</p>
          </li>
           <li>
            <i></i>
            <span>在线视频</span>
            <em></em>
            <p>班主任一对一管理</p>
          </li>
          <li>
            <i></i>
            <span>在线视频</span>
            <em></em>
            <p>班主任一对一管理</p>
          </li>
          <li>
            <i></i>
            <span>在线视频</span>
            <em></em>
            <p>班主任一对一管理</p>
          </li>
          <li>
            <i></i>
            <span>在线视频</span>
            <em></em>
            <p>班主任一对一管理</p>
          </li>
          <li>
            <i></i>
            <span>在线视频</span>
            <em></em>
            <p>班主任一对一管理</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.teacherfeature {
  width: 100%;
  padding: 0 30px 30px;
  background: #f4f4f4;
  overflow: auto;
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
      }
    }
    }
    
   
  }
}

</style>
