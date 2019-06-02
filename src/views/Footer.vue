<template>
  <div>
    <div class="footer">
      <div class="wrap">
        <div class="banner">
          <div class="logo"></div>
          <div class="phone">
            <em>服务热线</em>
            <span>400-1767-214</span>
          </div>
        </div>
        <div class="footerbox">
          <div class="item">
            <ul>
              <li>
                <a>互联网+教学模式</a>
              </li>
              <li>
                <a>PC官网直播入口</a>
              </li>
              <li>
                <a>APP产品移动学习</a>
              </li>
              <li>
                <a>微信小程序</a>
              </li>
              <li>
                <a>微信公众号</a>
              </li>
            </ul>
          </div>
          <div class="item">
            <ul>
              <li>
                <a>互联网+教学模式</a>
              </li>
              <li>
                <a>PC官网直播入口</a>
              </li>
              <li>
                <a>APP产品移动学习</a>
              </li>
              <li>
                <a>微信小程序</a>
              </li>
              <li>
                <a>微信公众号</a>
              </li>
            </ul>
          </div>
          <div class="item">
            <ul>
              <li>
                <a>互联网+教学模式</a>
              </li>
              <li>
                <a>PC官网直播入口</a>
              </li>
              <li>
                <a>APP产品移动学习</a>
              </li>
              <li>
                <a>微信小程序</a>
              </li>
              <li>
                <a>微信公众号</a>
              </li>
            </ul>
          </div>
          <div class="item">
            <ul>
              <li>
                <a>互联网+教学模式</a>
              </li>
              <li>
                <a>PC官网直播入口</a>
              </li>
              <li>
                <a>APP产品移动学习</a>
              </li>
              <li>
                <a>微信小程序</a>
              </li>
              <li>
                <a>微信公众号</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="trust">
          <ul>
            <li>
              <i></i>
              <span>网信认证</span>
            </li>
            <li>
              <i></i>
              <span>网上交易保障中心</span>
            </li>
            <li>
              <i></i>
              <span>互联网3.15 银牌诚信</span>
            </li>
            <li>
              <i></i>
              <span>诚信示范单位</span>
            </li>
          </ul>
        </div>
        <div class="copyright">Copyright 2018-2019 北京xxxxxxxxx有限公司 京ICP备17069128号</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.footer {
  width: 100%;
  padding: 0 30px 0;
  background: #282828;
  overflow: auto;
  .wrap {
    width: 1200px;
    margin: 0 auto;
    .banner{
      margin-top: 34px;
      overflow: hidden;
      margin-bottom: 40px;
      .logo{
        float: left;
        width: 176px;
        height: 51px;
        background: url(../assets/images/logofooter.png) no-repeat;
        background-size: contain;
      }
      .phone{
        float: right;
        text-align: left;
        color: #999;
        em{
          display: block;
          color: #666;
          font-size: 14px;
          margin-bottom: 4px;
        }
        >span{
          display: block;
          color: #fff;
          font-size: 28px;
          font-weight: bold;
        }
      }
    }
    .footerbox {
      border-bottom: 1px solid #333;
      overflow: hidden;
      padding-bottom: 20px;
      .item {
        float: left;
        width: 25%;
        padding-left: 33px;
        ul {
          color: #fff;
          border-right: 1px solid #333333;
         
          li {
            text-align: left;
            line-height: 30px;
            color: #999;
            font-size: 14px;
            &:nth-child(1){
              color: #666;
            }
          }
        }
      }
    }
    .trust{
      margin-top: 16px;
      ul{
         display: flex;
        justify-content: space-between;
        li{
          float: left;
          color: #999;
          font-size: 14px;
          padding: 6px 20px;
          border: 1px solid #333;
          line-height: 16px;
          margin-right: 16px;
          i{
            display: inline-block;
            width: 28px;
            height: 28px;
            background: url(../assets/images/footer.png) no-repeat;
            background-position: -20px -286px;
            vertical-align: middle;
            margin-right: 10px;
          }
          >span{
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }
    .copyright{
      color: #666;
      font-size: 12px;
      background: #1f1f1f;
      line-height: 51px;
      margin-top: 20px;
    }
  }
}
</style>
