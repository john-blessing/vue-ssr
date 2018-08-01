<template>
  <div class="class-manager-register">
    <navigator headname="注册并加入班级"/>
    <div class="global-top-height"></div>
    <div class="register-form">
      <div class="form-item" type="flex" align="center" justify="space-between">
        <input type="text" v-model="form.phone" placeholder="请输入手机号" @keyup="blurFormInput('phone')" @blur="blurFormInput('phone')">
        <span class="clear-icon1" @click="clearInput('phone')" v-if="clearObj.phone"></span>
        <span class="cgreen">获取验证码</span>
      </div>
      <p class="error-info" v-if="rules.phone">手机号不正确</p>
      <div class="form-item" type="flex" align="center" justify="space-between">
        <input type="text" v-model="form.verfifyCode" placeholder="请输入验证码" @keyup="blurFormInput('verfifyCode')" @blur="blurFormInput('verfifyCode')">
        <span class="clear-icon1" @click="clearInput('verfifyCode')" v-if="clearObj.verfifyCode"></span>
      </div>
      <p class="error-info" v-if="rules.verfifyCode">验证码错误</p>
      <div class="form-item" type="flex" align="center" justify="space-between">
        <input type="text" v-model="form.name" placeholder="请输入学生的真实姓名" @keyup="blurFormInput('name')" @blur="blurFormInput('name')">
        <span class="clear-icon1" @click="clearInput('name')" v-if="clearObj.name"></span>
      </div>
      <p class="error-info" v-if="rules.name">姓名不能为空</p>
      <div class="form-item" type="flex" align="center" justify="space-between">
        <input :type="isCloseEyes ? 'text' : 'password'" v-model="form.password" placeholder="请设置6-12位密码" @keyup="blurFormInput('password')" @blur="blurFormInput('password')">
        <span class="clear-icon1" style="margin-right: 30px" @click="clearInput('password')" v-if="clearObj.password"></span>
        <span v-if="!isCloseEyes" @click="isCloseEyes = true" class="close-eye"></span>
        <span v-if="isCloseEyes" @click="isCloseEyes = false" class="open-eye"></span>
      </div>
      <p class="error-info" v-if="rules.password">请输入6-12位密码</p>
      <div class="form-item" type="flex" align="center" justify="space-between">
        <input :type="isCloseEyes1 ? 'text' : 'password'" v-model="form.confirm" placeholder="请输入确认密码" @keyup="blurFormInput('confirm')">
        <span class="clear-icon1" style="margin-right: 30px" @click="clearInput('confirm')" v-if="clearObj.confirm"></span>
        <span v-if="!isCloseEyes1" @click="isCloseEyes1 = true" class="close-eye"></span>
        <span v-if="isCloseEyes1" @click="isCloseEyes1 = false" class="open-eye"></span>
      </div>
      <p class="error-info" v-if="rules.confirm">两次输入的密码不相同</p>
      <div class="block-center" style="margin-top: 80px"><button @click="register" class="primary-button">注册并加入班级</button></div>
      <p class="phone-surport">手机号仅支持中国大陆</p>
    </div>
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
      isCloseEyes1: false,
      form: {
        phone: '',
        verfifyCode: '',
        name: '',
        password: '',
        confirm: ''
      },
      rules: {
        phone: false,
        verfifyCode: false,
        name: false,
        password: false,
        confirm: false
      },
      clearObj: {
        phone: false,
        verfifyCode: false,
        name: false,
        password: false,
        confirm: false
      }
    }
  },
  methods: {
    clearInput(v) {
      this.form[v] = ''
      this.clearObj[v] = false
    },
    blurFormInput(v) {
      this.clearObj[v] = true
      if (this.form[v] == '') {
        this.clearObj[v] = false
      }
      if (v == 'phone') {
        this.rules[v] = !base.isPoneAvailable(this.form[v])
      }
      if (v == 'password') {
        if (this.form[v] == '' || !(this.form[v].length > 5 && this.form[v].length < 13)){
          this.rules[v] = true
        } else {
          this.rules[v] = false
        }
      }
      if (v == 'name') {
        if (this.form[v] == ''){
          this.rules[v] = true
        } else {
          this.rules[v] = false
        }
      }
      if (v == 'confirm') {
        if (this.form[v] == '' || !(this.form[v] == this.form.password)){
          this.rules[v] = true
        } else {
          this.rules[v] = false
        }
      }
    },
    register() {
      this.rules.phone = !base.isPoneAvailable(this.form.phone)
      if (this.form.password == '' || !(this.form.password.length > 5 && this.form.password.length < 13)){
        this.rules.password = true
      } else {
        this.rules.password = false
      }
      if (this.form.name == ''){
        this.rules.name = true
      } else {
        this.rules.name = false
      }
      if (!(this.form.confirm == this.form.password)){
        this.rules.confirm = true
      } else {
        this.rules.confirm = false
      }

      let isVerifyAll = [];

      for(let item in this.rules) {
        if(this.rules[item] == true) {
          isVerifyAll.push(item)
        }
      }
      
      if (isVerifyAll.length == 0) {
        console.log(isVerifyAll)
      }
    }
  }
}
</script>
<style lang="stylus">
$base-font-size = 37.5px

px2rem($px) {
  return unit(($px / $base-font-size) / 2, 'rem')
}

.class-manager-register{
  padding-top: px2rem(100px);
  .register-form{
    padding: px2rem(100px) px2rem(94px);
  }
  .phone-surport{
    font-size: px2rem(24px);
    color: #ccc;
    margin-top: px2rem(40px);
    padding-left: px2rem(50px);
  }
  .form-item{
    border-bottom: 1px solid #ccc;
    padding-bottom: px2rem(25px);
    padding-top: px2rem(40px);
    font-size: px2rem(28px);
    &:first-child{
      input {
        width: 60%;
      }
    }
    input{
      font-size: px2rem(28px);
      width: 89%;
      color: #333;
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
