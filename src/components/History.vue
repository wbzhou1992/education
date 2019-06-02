<template>
  <div>
    <div class="history">
      <div class="wrap">
        <div class="historybox">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <div class="desc">
                <i></i>
                <span>{{item.name}}</span>
                <p>{{item.meta}}</p>
              </div>
              <div class="ani"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="data">
      <ul>
        <li v-for="(item,index) in dataList" :key="index">
          <div>
            <h1>{{item.number}}</h1>
            <span>{{item.unit}}</span>
          </div>
          <em>{{item.meta}}</em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {name:'感恩有你',meta:'十二年发展回归'},
        {name:'引领行业',meta:'育人培训体系'},
        {name:'务实创新',meta:'互联网+教育'},
        {name:'教育机构',meta:'年度品牌影响力'}
      ],
      dataList: [
        {number:12,meta:'教育培训经验',unit:'年'},
        {number:60,meta:'市场占有率',unit:'%'},
        {number:2.7,meta:'学员同时在线',unit:'万'},
        {number:172,meta:'注册用户',unit:'万'},
        {number:1.2,meta:'总访问量',unit:'亿'}
      ]
    }
  }
}
</script>

<style lang="less">
.history {
  width: 100%;
  padding: 0 30px 30px;
  background: #1d88e7;
  overflow: hidden;
  .wrap {
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
    .historybox {
      ul {
        background: url(./images/history.jpg) no-repeat;
        height: 321px;
        color: #fff;

        li {
          float: left;
          width: 25%;
          text-align: center;
          position: relative;
          height: 321px;
          overflow: hidden;
          .desc {
            z-index: 2;
            position: relative;
            i {
              display: block;
              width: 55px;
              height: 55px;
              background: url(./images/feature.png) no-repeat;
              margin: 80px auto 24px;
            }
            span {
              font-size: 16px;
              display: block;
              margin-bottom: 26px;
            }
            p {
              font-size: 12px;
            }
          }
          .ani {
            width: 300px;
            height: 321px;
            position: absolute;
            background: #015198;
            bottom: -321px;
            z-index: 1;
          }

          &:hover {
            .ani {
              bottom: 0;
              transition: bottom 0.3s ease-out;
            }
          }

          &:nth-child(1) {
            i {
              background-position: -88px -132px;
            }
          }
          &:nth-child(2) {
            i {
              background-position: -152px -132px;
            }
          }
          &:nth-child(3) {
            i {
              background-position: -210px -122px;
            }
          }
          &:nth-child(4) {
            margin-right: 0;
            &:after {
              content: "";
              display: inline-block;
              position: absolute;
              height: 100px;
              background: #eee;
              width: 0;
              right: -3px;
              top: 60px;
            }
            i {
              background-position: -97px -199px;
            }
          }
        }
      }
    }
  }
}
.data {
  width: 1200px;
  margin: 0 auto;
  height: 160px;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      margin: 50px 40px 30px;
      > div {
        border-right: 1px solid #eee;
        border-left: 1px solid #eee;
        padding: 0 40px;
        h1 {
          color: #1d88e7;
          font-size: 60px;
          line-height: 30px;
        }
        span {
          display: block;
          margin-top: 10px;
          margin-bottom: 16px;
          color: #666;
          font-size: 14px;
          position: relative;
          left: 40px;
        }
      }
      em {
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>
