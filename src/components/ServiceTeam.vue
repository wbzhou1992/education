<template>
  <div class="serviceteam">
    <div class="wrap">
      <h2>消防课程中心</h2>
      <div class="serviceteambox">
        <ul>
          <li>
            <i></i>
            <p>班主任一对一管理</p>
          </li>
           <li>
           <i></i>
            <p>班主任一对一管理</p>
          </li>
           <li>
           <i></i>
            <p>班主任一对一管理</p>
          </li>
           <li>
          <i></i>
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
.serviceteam {
  width: 100%;
  padding: 0 30px 30px;
  background: #fff;
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

    .serviceteambox{
      
    ul{
      li{
        float: left;
        width: 290px;
        text-align: center;
        margin-right: 10px;
        padding: 20px 0;
        background: #fff;
        text-align: center;
        i{
          display: inline-block;
          width: 33px;
          height: 33px;
          background: url(./images/feature.png) no-repeat;
          vertical-align: middle;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        p{
          color: #fff;
          font-size: 14px;
        }
        &:nth-child(1){
          background-color: #77caf3;
          i{
            background-position: -87px 0;
          }
        }
        &:nth-child(2){
          background-color: #d29cfc;
          i{
            background-position: -131px 0;
          }
        }
        &:nth-child(3){
          background-color: #59e1d6;
          i{
            background-position: -169px 0;
          }
        }
        &:nth-child(4){
          background-color: #ffd2a7;
          i{
            background-position: -209px 0;
          }
        }
      }
    }
    }
    
   
  }
}

</style>
