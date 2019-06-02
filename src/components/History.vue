<template>
  <div>
    <div class="history">
      <div class="wrap">
        <div class="historybox">
          <ul>
            <li>
              <i></i>
              <span>在线视频</span>
              <p>十二年发展回顾</p>
              <div></div>
            </li>
            <li>
              <i></i>
              <span>在线视频</span>
              <p>十二年发展回顾</p>
              <div></div>
            </li>
            <li>
              <i></i>
              <span>在线视频</span>
              <p>十二年发展回顾</p>
              <div></div>
            </li>
            <li>
              <i></i>
              <span>在线视频</span>
              <p>十二年发展回顾</p>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="data">
      <ul>
        <li>
          <div>
            <h1>12</h1>
          <span>年</span>
          </div>
          <em>教育培训经验</em>
        </li>
         <li>
          <div>
            <h1>60</h1>
          <span>年</span>
          </div>
          <em>教育培训经验</em>
        </li>
         <li>
          <div>
            <h1>2.7</h1>
          <span>年</span>
          </div>
          <em>教育培训经验</em>
        </li>
         <li>
          <div>
            <h1>172</h1>
          <span>年</span>
          </div>
          <em>教育培训经验</em>
        </li>
        <li>
          <div>
            <h1>1.2</h1>
          <span>年</span>
          </div>
          <em>教育培训经验</em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.history {
  width: 100%;
  padding: 0 30px 30px;
  background: #1d88e7;
  overflow: auto;
  .wrap {
      width: 1200px;
      margin: 0 auto;
      padding-top: 30px;
    .historybox{
    ul{
      background: url(./images/history.jpg) no-repeat;
      height: 321px;
      color: #fff;
      li{
        float: left;
        width:25%;
        text-align: center;
        position: relative;
        height: 321px;
        overflow: hidden;
        >div{
          width: 300px;
          height: 321px;
          position: absolute;
          background: #015198;
          bottom: -321px;
          z-index: 1;
        }
        &:hover{
          >div{
            bottom: 0;
            transition:bottom 0.3s ease-out;
          }
        }
        i{
          display: block;
          width: 33px;
          height: 33px;
          background: url(./images/feature.png) no-repeat;
          margin: 80px auto 24px;
        }
        span{
          font-size: 16px;
          display: block;
          margin-bottom: 26px;
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
.data{
  width: 1200px;
  margin: 0 auto;
  height: 160px;
  ul{
    display: flex;
    justify-content: space-around;
    li{
      margin: 50px 40px 30px;
      >div{
        border-right: 1px solid #eee;
      border-left: 1px solid #eee;
       padding: 0 40px;
        h1{
        color: #1d88e7;
        font-size: 60px;
        line-height: 30px;
      }
      span{
        display: block;
        margin-top: 10px;
        margin-bottom: 16px;
        color: #666;
        font-size: 14px;
        position: relative;
        left: 40px;
      }
      }
      em{
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>
