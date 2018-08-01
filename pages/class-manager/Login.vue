<template>
  <div class="class-manager-login">
    <navigator headname="加入班级"/>
    <div class="global-top-height"></div>
    <div class="login-form">
      <div class="form-item" type="flex" align="center">
        <span class="account"></span><input type="text" v-model="form.account" placeholder="注册手机号或考拉账号" @keyup="blurFormInput('account')" @blur="blurFormInput('account')">
        <span class="clear-icon" @click="clearInput('account')" v-if="clearObj.account" style="position: relative;right:-20px"></span>
      </div>
      <p class="error-info" v-if="rules.account" style="padding-left: 25px">手机号不正确</p>
      <div class="form-item" type="flex" align="center" justify="space-between">
        <span class="form-item__password"><span class="key"></span><input :type="isCloseEyes ? 'text' : 'password'" @keyup="blurFormInput('password')" v-model="form.password" placeholder="登录密码"></span>
        <span class="clear-icon" @click="clearInput('password')" v-if="clearObj.password" style="position: relative;left: -10px"></span>
        <span v-if="!isCloseEyes" @click="isCloseEyes = true" class="close-eye"></span>
        <span v-if="isCloseEyes" @click="isCloseEyes = false" class="open-eye"></span>
      </div>
      <p class="error-info" v-if="rules.password" style="padding-left: 25px">密码错误</p>
    </div>
    <div class="block-center" style="margin-top: 35px"><button @click="login" class="primary-button">注册并加入班级</button></div>
  </div>
</template>
<script>
import navigator from '~/components/navigator.vue'
import * as base from '~/utils/base'
export default {
  components: {
    navigator
  },
  data() {
    return {
      isCloseEyes: false,
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: '',
        password: ''
      },
      clearObj: {
        account: false,
        password: false
      }
    }
  },
  methods: {
    login() {
      this.rules.account = !base.isPoneAvailable(this.form.account)

      let isVerifyAll = [];

      for(let item in this.rules) {
        if(this.rules[item] == true) {
          isVerifyAll.push(item)
        }
      }
      
      if (isVerifyAll.length == 0) {
        console.log(isVerifyAll)
      }
    },
    blurFormInput(v) {
      if (this.form[v] == '') {
        this.clearObj[v] = false
      }

      if (v == 'account') {
        this.rules[v] = !base.isPoneAvailable(this.form[v])
      }
      this.clearObj[v] = true
    },
    clearInput(v) {
      this.form[v] = ''
      this.clearObj[v] = false
    }
  }
}
</script>
<style lang="stylus">
$base-font-size = 37.5px

px2rem($px) {
  return unit(($px / $base-font-size) / 2, 'rem');
}

.class-manager-login{
  padding-top: px2rem(100px);
  .login-form{
    padding: px2rem(100px) px2rem(85px);
    .form-item{
      width: 100%;
      height: px2rem(90px);
      border: 1px solid #eee;
      border-radius: px2rem(90px);
      margin-top: px2rem(58px);
      box-sizing: border-box;
      padding: 0 px2rem(41px) 0 px2rem(51px);
      .account{
        margin-right: px2rem(40px);
      }
      .key{
        margin-right: px2rem(40px);
        & + input{
          width: 100%;
        }
      }
      &__password{
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
    input {
      font-size: px2rem(30px);
      &::-webkit-input-placeholder { 
      color: #ccc;
      }
      &:-moz-placeholder { 
      color: #ccc;
      }
      &::-moz-placeholder { 
      color: #ccc;
      }
      &:-ms-input-placeholder {
        color: #ccc;
      }
    }
  }
}

</style>
