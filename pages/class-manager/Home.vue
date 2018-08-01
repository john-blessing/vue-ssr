<template>
  <div class="class-manager">
    <div class="class-manager__bg"></div>
    <navigator headname="考拉阅读注册加班"/>
    <div class="class-manager__tip">
      <p style="margin-bottom: 8px;color:#333">同学们：</p>
      <p>我是你们的<span class="cgreen">大考拉不是考拉</span>老师，我在考拉阅读创
建了班级，同学们加入班级后，就可以进行
阅读能力测评轻松了解自己的阅读能力啦~</p>
      <p style="margin-top: 6px;" class="cgreen">一年级很长很长很...   班级代码: 3DKJHE</p>
      <p style="margin-top: 6px;text-align:right"><span class="cgreen">大考拉不是考拉</span> 老师</p>
    </div>
    <p class="class-manager__title">没有注册过的同学看这里</p>
    <div class="class-manager__register-info">
      <p>如果你同时满足以下2点，请点击下方按钮注册并加入班级：</p>
      <p type='flex'><img src="~/assets/images/check_03.png"/> 老师没有发放考拉阅读（学生端）的账号密码</p>
      <p type='flex'><img src="~/assets/images/check_03.png"/> 你还没有注册过考拉阅读（学生端）</p>
    </div>
    <div class="block-center"><button class="primary-button" @click="register">注册并加入班级</button></div>
    <p class="class-manager__title" style="margin-top: 50px">已注册，没有加入班级的同学看这里</p>
    <div class="class-manager__login-info">
      <p>如果你同时满足以下2点，请点击下方按钮注册并加入班级：</p>
    </div>
    <div class="block-center"><button class="primary-button" @click="login">加入班级</button></div>
  </div>
</template>
<script>
import navigator from '~/components/navigator.vue'

export default {
  components: {
    navigator
  },
  methods: {
    register(){
      this.$router.push({path: '/class-manager/Register'})
    },
    login(){
      this.$router.push({path: '/class-manager/Login'})
    }
  }
}
</script>
<style lang="stylus">
$base-font-size = 37.5px

px2rem($px) {
  return unit(($px / $base-font-size) / 2, 'rem');
}
.class-manager{
  padding-top: px2rem(100px);
  padding-bottom: px2rem(100px);
  &__bg{
    width: 100%;
    height: px2rem(489px);
    background: url('../../assets/images/bg_03.png') 50% 50% no-repeat;
    background-size: contain;
    position: absolute;
  }
  &__tip{
    margin-left: px2rem(55px);
    margin-right: px2rem(55px);
    font-size: px2rem(28px);
    margin-bottom: px2rem(300px);
    background-color: #ffffff;
    box-shadow: 0px 0px px2rem(23px) 0px rgba(4, 202, 115, 0.1) 0px px2rem(20px) px2rem(60px) 0px rgba(4, 202, 115, 0.15);
    border-radius: px2rem(24px);
    padding: px2rem(41px) px2rem(45px);
    position: relative;
    top: px2rem(180px);
  }
  &__title{
    font-size: px2rem(34px);
    padding-left: px2rem(44px);
    padding-right: px2rem(44px);
    position: relative;
    z-index: 2;
    &::after{
      content: '';
      position: absolute;
      left: px2rem(32px);
      bottom: 0;
      width: px2rem(401px);
      height: px2rem(18px);
      background: #81e4b9;
      z-index: -1;
    }
    &:nth-of-type(2)::after {
      content: '';
      position: absolute;
      left: px2rem(32px);
      bottom: 0;
      width: px2rem(569px);
      height: px2rem(18px);
      background: #81e4b9;
      z-index: -1;
    }
  }
  &__login-info {
    font-size: px2rem(28px);
    padding: px2rem(59px) px2rem(77px) px2rem(40px) px2rem(77px);
    p:first-child{
      font-weight: bolder;
      margin-bottom: px2rem(30px);
    }
  }
  &__register-info {
    font-size: px2rem(28px);
    padding: px2rem(59px) px2rem(77px);
    p:first-child{
      font-weight: bolder;
      margin-bottom: px2rem(30px);
    }
    p:nth-of-type(2){
      margin-bottom: px2rem(10px);
    }
    p[type=flex]{
      display: flex;
      align-items: center;
      color: #333;
      white-space: nowrap;
      img{
        margin-right: px2rem(8px);
        width: px2rem(28px);
      }
    }
  }
}
</style>
