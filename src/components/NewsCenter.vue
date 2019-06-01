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
          <li class="transform">
            <div class="news-img">
              <img src="./images/new1.jpg">
            </div>
            <div class="news-cont">
              <h2>考试流程相关</h2>
              <dl class="second">
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
              </dl>
              <div class="second-more"><a>More+</a></div>
            </div>
          </li>
          <li class="transform">
            <div class="news-img">
              <img src="./images/new1.jpg">
            </div>
           <div class="news-cont">
              <h2>考试流程相关</h2>
              <dl class="second">
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
              </dl>
              <div class="second-more"><a>More+</a></div>
            </div>
          </li>
           <li class="transform">
            <div class="news-img">
              <img src="./images/new1.jpg">
            </div>
            <div class="news-cont">
              <h2>考试流程相关</h2>
              <dl class="second">
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
                <dt><a>你报名了雨露众德培训消防吗你报名了雨露众德培训消防吗</a></dt>
              </dl>
              <div class="second-more"><a>More+</a></div>
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
.newscenterr {
  width: 100%;
  padding: 30px 30px;
  background: #f4f4f4;
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
    .newsbox {
      ul {
        display: flex;
        justify-content: space-between;
        text-align: left;
        li {
          width: 310px;
          height: 336px;
          background-color: #fff;
          .news-img{
            img{
              width: 100%;
              height: 131px;
              display: inline-block;
              transition: transform 0.8s;
            }
          }
          h2{
            font-size: 18px;
            margin: 20px 0 10px 20px;
            font-weight: normal;
          }
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
            background-image: linear-gradient(top,#01a8e9,#0174c9);
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
          }
          dl {
            font-size: 14px;
            dt {
              line-height: 30px;
              a{
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
            }
          }
          .second{
            dt{
              a{
                padding-left: 14px;
                padding-right: 30px;
                &:before{
                  content: "";
                  display: inline-block;
                  width:6px;
                  height: 6px;
                  vertical-align: middle;
                  background: #b2b2b2;
                  border-radius: 3px;
                  margin-right: 4px;
                }
                &:hover{
                  text-decoration: underline;
                  color: #015198;
                  cursor: pointer;
                }
              }
            }
          }
          .second-more{
            float: right;
            font-size: 12px;
            color: #ccc;
            margin-top: 6px;
            margin-right: 20px;
            &:hover{
              color: #777;
              cursor: pointer;
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
        .transform{
          overflow: hidden;
          transition: transform .3s;
          &:hover{
            transform: translateY(-10px);
            box-shadow: 0 14px 22px rgba(0, 0, 0, 0.1);
            .news-img{
              img{
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }
  }
}
</style>
