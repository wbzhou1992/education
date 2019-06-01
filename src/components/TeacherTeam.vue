<template>
  <div class="teacherteam">
    <div class="wrap">
      <h2>消防课程中心</h2>
      <div class="teacherteambox">
        <ul>
          <li>
            <img src="./images/new2.jpg">
            <p class="name">程老师</p>
            <div class="btn">注册消防讲师</div>
           <p class="tips">
              一级注册消防工程师、中级工程师，多年从事消防安全工作，近年主要从事注册一级消...
            </p>
          </li>
           <li>
            <img src="./images/new2.jpg">
            <p class="name">程老师</p>
            <div class="btn">注册消防讲师</div>
            <p class="tips">
              一级注册消防工程师、中级工程师，多年从事消防安全工作，近年主要从事注册一级消...
            </p>
          </li>
           <li>
            <img src="./images/new2.jpg">
            <p class="name">程老师</p>
            <div class="btn">注册消防讲师</div>
            <p class="tips">
              一级注册消防工程师、中级工程师，多年从事消防安全工作，近年主要从事注册一级消...
            </p>
          </li>
           <li>
            <img src="./images/new2.jpg">
            <p class="name">程老师</p>
            <div class="btn">注册消防讲师</div>
            <p class="tips">
              一级注册消防工程师、中级工程师，多年从事消防安全工作，近年主要从事注册一级消...
            </p>
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
.teacherteam {
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

    .teacherteambox{
      
    ul{
      li{
        float: left;
        width: 290px;
        text-align: center;
        margin-right: 10px;
        padding: 20px 0;
        background: #fff;
        img{
          width: 92px;
          height: 92px;
          overflow: hidden;
          border-radius: 46px;
        }
        .name{
          font-size: 16px;
          margin: 15px 0 10px 0;
        }
        .btn{
          font-size: 16px;
          background: #2a92ee;
          padding: 6px 23px; 
          display: inline-block;
          color: #fff;
          
          margin: 13px;
        }
        .tips{
          font-size: 12px;
          width: 260px;
          margin: 0 auto;
          text-align: left;
          text-indent: 2em;
          height: 69px;
          line-height: 23px;
        }
        &:hover{
          box-shadow: 0 14px 22px rgba(0, 0, 0, 0.1);
        }
      }
    }
    }
    
   
  }
}

</style>
