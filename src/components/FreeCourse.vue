<template>
  <div class="freecourse">
    <div class="wrap">
      <h2>免费视频</h2>
      <div class="freecoursebox">
        <ul>
          <li>
            <img src="./images/new2.jpg">
            <p>前言</p>
            <div class="teacher">
              <span>讲师：</span>
              <span>赵老师</span>
              <span class="num">1680人学过</span>
            </div>
          </li>
          <li>
            <img src="./images/new2.jpg">
            <p>前言</p>
            <div class="teacher">
              <span>讲师：</span>
              <span>赵老师</span>
              <span class="num">1680人学过</span>
            </div>
          </li>
          <li>
            <img src="./images/new2.jpg">
            <p>前言</p>
            <div class="teacher">
              <span>讲师：</span>
              <span>赵老师</span>
              <span class="num">1680人学过</span>
            </div>
          </li>
          <li>
            <img src="./images/new2.jpg">
            <p>前言</p>
            <div class="teacher">
              <span>讲师：</span>
              <span>赵老师</span>
              <span class="num">1680人学过</span>
            </div>
          </li>
          <li>
            <img src="./images/new2.jpg">
            <p>前言</p>
            <div class="teacher">
              <span>讲师：</span>
              <span>赵老师</span>
              <span class="num">1680人学过</span>
            </div>
          </li>
          <li>
            <img src="./images/new2.jpg">
            <p>前言</p>
            <div class="teacher">
              <span>讲师：</span>
              <span>赵老师</span>
              <span class="num">1680人学过</span>
            </div>
          </li>
          <li>
            <img src="./images/new2.jpg">
            <p>前言</p>
            <div class="teacher">
              <span>讲师：</span>
              <span>赵老师</span>
              <span class="num">1680人学过</span>
            </div>
          </li>
          <li>
            <img src="./images/new2.jpg">
            <p>前言</p>
            <div class="teacher">
              <span>讲师：</span>
              <span>赵老师</span>
              <span class="num">1680人学过</span>
            </div>
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
.freecourse {
  width: 100%;
  padding: 0 30px 30px;
  background: #fff;
  .wrap {
      width: 1200px;
      margin: 0 auto;
      h2 {
      color: #333;
      font-size: 20px;
      margin: 14px 0;
      text-align: left;
      font-weight: bold;
    }
    .freecoursebox{
      ul{
        overflow: hidden;
        li{
          float: left;
          width: 289px; 
          border: 1px solid #dedede;
          overflow: hidden;
          margin-right: 14px;
          margin-bottom: 14px;
          p{
            width: 270px;
            padding: 8px 8px 8px 0;
            font-size: 16px;
            line-height: 30px;
            text-align: left;
            border-bottom: 1px solid #dedede;
            margin-left: 10px;
          }
          img{
            width: 290px;
            height: 163px;
          }
          .teacher{
            height: 49px;
            line-height: 49px;
            text-align: left;
            padding-left: 10px;
            span{
              font-size: 14px;
              color: #666;
              vertical-align: middle;
              &:nth-child(1){
                font-size: 12px;
              }
            }
            .num{
              float: right;
              margin-right: 10px;
              color: #999;
              font-size: 12px;
            }
          }
          &:nth-child(4n+0){
            margin-right: 0;
          }
        }
      }
    }
  }
}

</style>
