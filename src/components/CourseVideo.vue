<template>
  <div class="coursevideo">
    <div class="wrap">
      <h2>消防课程中心</h2>
      <div class="coursevideobox">
        <div ref="dplayer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import DPlayer from "dplayer";
import "dplayer/dist/DPlayer.min.css";

export default {
  mounted() {
    const dp = new DPlayer({
      container: this.$refs.dplayer,
      screenshot: true,
      video: {
        url: "./static/videos/1.mp4"
      },
      subtitle: {
        url: "webvtt.vtt"
      },
      danmaku: {
        id: "demo",
        api: "https://api.prprpr.me/dplayer/"
      }
    });
  }
};
</script>

<style lang="less">
.coursevideo {
  width: 100%;
  padding: 30px 30px;
  background: #fff;
  .wrap {
    width: 1200px;
    margin: 0 auto;
  }
  h2 {
    color: #333;
    font-size: 20px;
    margin: 14px 0;
    text-align: left;
    font-weight: bold;
  }
  .coursevideobox {
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    position: relative;
    .dplayer {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
