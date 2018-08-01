<template>
  <div class="login-result">
    <navigator headname="加班结果" />
    <div class="block-center">
      <img class="login-icon" src="~/assets/images/bj.png" alt="">
    </div>
    <p class="block-center login-success">恭喜你已成功加入班级！</p>
    <p class="block-center login-class"><span>班级名称：</span>三年级</p>
    <p class="block-center login-teacher"><span>班级教师：</span>王晓明</p>
    <div class="qr-code">
      <div class="left">
        <p class="qr-code--mo1">长按识别图中二维码下载</p>
        <p class="qr-code--mo2">考拉阅读（学生端）</p>
        <div class="logo"><img src="~/assets/images/qr_06.png" alt=""></div>
      </div>
      <div class="qr-img">
        <img src="~/assets/images/qr_03.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import navigator from '~/components/navigator.vue'
export default {
  components: {
    navigator
  }
}
</script>
<style lang="stylus">
$base-font-size = 37.5px

px2rem($px) {
  return unit(($px / $base-font-size) / 2, 'rem');
}
.login-result{
  padding: px2rem(100px) px2rem(34px);
  .login-icon{
    width: px2rem(380px);
    margin-top: px2rem(60px);
  }
  .login-success{
    font-size: px2rem(34px);
    color: #333;
    font-size: px2rem(34px);
    margin-top: px2rem(10px);
    margin-bottom: px2rem(35px);
    font-weight: bold;
  }
  .login-class, .login-teacher{
    color: #333;
    font-size: px2rem(24px);
    line-height: px2rem(42px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span{
      color: #999;
    }
  }
  .qr-code{
    background: #fafafa;
    padding: px2rem(28px) px2rem(28px) px2rem(35px) px2rem(41px);
    margin-top: px2rem(51px);
    overflow: hidden;
    position: relative;    
    &--mo1, &--mo2{
      font-size: px2rem(28px);
      line-height: px2rem(42px);
      color: #333;
    }
    &--mo2{
      font-weight: bolder;
    }
    .left{
      float: left;
      padding-top: px2rem(30px);
    }
    .logo{
      margin-top: px2rem(30px);
      position: absolute;
      left: px2rem(34px);
      bottom: px2rem(34px);
      width: px2rem(194px);
      img{
        width: 100%;
      }
    }
    .qr-img{
      float: right;
      width: px2rem(249px);
      padding: px2rem(10px);
      background: #fff;
      box-sizing: border-box;
      img{
        vertical-align: top;
        width: 100%;
      }
    }
  }
}
</style>
