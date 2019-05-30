<template>
  <div class="newscenterr">
    <div class="wrap">
      <h2>新闻资讯</h2>
      <div class="newsbox">
        <ul>
          <li>
            <h1>
              新闻资讯
              <em>news</em>
            </h1>

            <dl>
              <dt>
                <a>你报名了雨露众德培训消防吗...</a>
              </dt>
              <dt>
                <a>你报名了雨露众德培训消防吗...</a>
              </dt>
              <dt>
                <a>你报名了雨露众德培训消防吗...</a>
              </dt>
              <dt>
                <a>你报名了雨露众德培训消防吗...</a>
              </dt>
            </dl>
            <div class="more">了解更多</div>
          </li>
          <li>
            <h1></h1>
            <em></em>
            <dl>
              <dt>你报名了雨露众德培训消防吗...</dt>
              <dt>你报名了雨露众德培训消防吗...</dt>
              <dt>你报名了雨露众德培训消防吗...</dt>
              <dt>你报名了雨露众德培训消防吗...</dt>
            </dl>
            <div class="more"></div>
          </li>
          <li>
            <h1></h1>
            <em></em>
            <dl>
              <dt>你报名了雨露众德培训消防吗...</dt>
              <dt>你报名了雨露众德培训消防吗...</dt>
              <dt>你报名了雨露众德培训消防吗...</dt>
              <dt>你报名了雨露众德培训消防吗...</dt>
            </dl>
            <div class="more"></div>
          </li>
          <li>
            <h1></h1>
            <em></em>
            <dl>
              <dt>你报名了雨露众德培训消防吗...</dt>
              <dt>你报名了雨露众德培训消防吗...</dt>
              <dt>你报名了雨露众德培训消防吗...</dt>
              <dt>你报名了雨露众德培训消防吗...</dt>
            </dl>
            <div class="more"></div>
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
.newscenterr {
  width: 100%;
  padding: 0 30px;
  background: #f4f4f4;
  .wrap {
      width: 1200px;
      margin: 0 auto;
    h2 {
      color: #333;
      font-size: 20px;
      margin: 14px 0;
      text-align: left;
    }
    .newsbox {
      ul {
        display: flex;
        justify-content: space-between;
        text-align: left;
        li {
          width: 310px;
          height: 336px;
          h1 {
            font-size: 30px;
            margin-bottom: 50px;
            margin-top: 30px;
            em {
              font-size: 15px;
              display: block;
              text-transform: uppercase;
            }
          }

          &:nth-child(1) {
            width: 240px;
            padding-left: 20px;
            color: #fff;
            background: url(./images/news.jpg) no-repeat;
          }
          dl {
            font-size: 14px;
            dt {
              line-height: 30px;
            }
          }
          .more {
            width: 94px;
            line-height: 40px;
            text-align: center;
            font-size: 16px;
            margin-left: 46px;
            margin-top: 24px;
            border: 1px solid #fff;
          }
        }
      }
    }
  }
}
</style>
