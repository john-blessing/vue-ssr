<template>
  <section class="container">
    <div class="gk-yc-wrapper">
      <div class="gk-yc-banner">
        <img src="../assets/img/banner.jpg" alt="">
      </div>
      <div class="gk-yc-row">
        <h2 class="text-center gk-title">
          <!-- <%= book.title %> -->
        </h2>
        <p class="text-center gk-sub-title">
          <!-- <%= book.subject_name %>专用 -->
        </p>
        <div id="verify-base">
          <div class="gk-yc-input">
            <input id="input-value" type="text" placeholder="请输入10位卡号">
            <button id="enter">确认</button>
          </div>
          <p class="text-center gk-detail-title">验证领增值资料</p>
          <div class="gk-detail-item">
            <img src="../assets/img/2.png" /> 自测统评+个性化诊断报告</div>
          <div class="gk-detail-item">
            <img src="../assets/img/2.png" /> 临考冲刺提分群VIP会员</div>
          <div class="gk-detail-item">
            <img src="../assets/img/2.png" /> 高考命题预测与讲 — 临考押题分析课</div>
        </div>
        <div id="verify-success" style="display: none">
          <div class="text-center gk-yc-success">
            <img src="../assets/img/1.png" alt=""> 恭喜您获得配套增值资料
          </div>
          <p class="text-center gk-detail-title">领取说明</p>
          <div class="gk-yc-intro">
            <div id="img" class="img"></div>
            <div class="gk-yc-intro-detail">
              <p>1.长按二维码进入“天利38套”公众号</p>
              <p>2.点击“图书增值”子菜单进入增值服务小程序领取</p>
            </div>
            <div style="clear: left"></div>
          </div>
          <a class="text-center" href="https://jq.qq.com/?_wv=1027&k=5cUmfYj">
            <span class="btnVip">
              <img src="../assets/img/3.png" alt=""> 快速进VIP群</span>
          </a>
        </div>
        <div id="modal" style="display:none;">
          <div class="modal-bg">
          </div>
          <div class="modal">
            <div class="title">
              该图书为正版
            </div>
            <div class="detail line1" style="margin-bottom: 20px">
              恭喜您，该验证码首次验证成功
            </div>
            <div class="btn-bar">
              <button style="display:none" class="ghost btn" onclick="reVerify()">重新验证</button>
              <button class="primary btn" onclick="reVerify()">知道了</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  head() {
    return {
      title: "分站列表",
      meta: [
        {
          name: "keywords",
          content: "主站,北京"
        }
      ]
    };
  },
  data() {
    return {
      sitesList: ""
    };
  },
  async asyncData({ store }) {
    return {
      sitesList: await store.dispatch("getSites").catch(error => {
        console.log(error);
      })
    };
  },
  methods: {
    ...mapActions(["setNewTitle"]),
    getNewTitle() {
      this.setNewTitle("学格科技");
    },
    hoverMessage() {
      this.$notify({
        title: "提示",
        message: "这条信息"
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
$default-font-size = 16px;
$prmary-color = #00A874;
$black-color = #030303;
$r15 = 0.9375rem;
$r10 = 0.625rem;
$r30 = 1.875rem;
$r14 = 0.875rem;
$r8 = 0.5rem;
$r20 = 1.25rem;
$r28 = 1.75rem;
$r18 = 1.125rem;
$r25 = 1.5625rem;
$r40 = 2.5rem;
$r12 = 0.75rem;
// pxTorem function
// pxTorem($px) {
//   return $px / $default-font-size * 1rem;
// }

html {
  font-size: $default-font-size;
}

.gk-yc-wrapper {
  a {
    text-decoration: none;
  }

  .modal-bg {
    background: #000;
    opacity: 0.7;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  .modal {
    position: absolute;
    top: 12.5rem;
    left: 10%;
    z-index: 3;
    background: #FFFFFF;
    border-radius: 0.9375rem;
    min-height: 6.25rem;
    width: 80%;
    padding: 1.125rem 1.25rem;
    min-width: 18.75rem;
    box-sizing: border-box;
    text-align: center;

    .title {
      font-size: 1rem;
      font-weight: 200;
      color: $prmary-color;
      letter-spacing: 0;
    }

    .detail {
      color: $black-color;
      letter-spacing: 0;
      line-height: 1.5625rem;

      &.line1 {
        margin-top: $r15;
      }

      &.line2 {
        margin-bottom: $r10;
      }
    }

    .btn-bar {
      .btn+.btn {
        margin-left: 0.1rem;
      }

      .btn {
        height: $r30;
        font-size: $r14;
        width: 45%;
        padding: $r8 auto;
        border-radius: 0.1rem;
        font-weight: 100;
        margin: 0;
        outline: 0;

        &:active {
          opacity: 0.8;
        }

        &.primary {
          background: #F5A623;
          color: #FFF;
          border: none;
        }

        &.ghost {
          background: transparent;
          color: $black-color;
          border: 1px solid $black-color;
        }
      }
    }
  }

  .gk-yc-banner {
    img {
      width: 100%;
    }
  }

  .gk-yc-row {
    padding-left: 4%;
    padding-right: 4%;
  }

  .text-center {
    text-align: center;
  }

  .gk-title {
    margin-top: $r20;
    font-size: $r18;
    color: #030303;
    letter-spacing: 0;
    line-height: $r28;
    font-weight: 400;
  }

  .gk-sub-title {
    margin-top: $r10;
    font-size: $r14;
    color: #8C9095;
    letter-spacing: 0;
  }

  .gk-yc-input {
    margin-top: $r25;

    input, button {
      height: $r40;
      // line-height: pxTorem(40px);
      box-sizing: border-box;
    }

    input {
      border: 1px solid #027F59;
      float: left;
      width: 70%;
      padding-left: $r10;
      font-size: $r14;
      padding: $r14 0 $r14 $r14;
      color: #8C9095;
      border-radius: 0;
    }

    button {
      width: 30%;
      background: #027F59;
      border: 1px solid #027F59;
      border: 0;
      font-size: $r14;
      color: #FFFFFF;
      letter-spacing: 0;
    }
  }

  .gk-detail-title {
    font-size: $r18;
    color: #030303;
    letter-spacing: 0;
    position: relative;
    margin-bottom: $r30;
    margin-top: $r30;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: $r10;
      width: 25%;
      height: 1px;
      background: #BDBFC2;
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: $r10;
      width: 25%;
      height: 1px;
      background: #BDBFC2;
    }
  }

  .gk-detail-item {
    padding: $r12;
    background: #F5F5F5;
    margin-bottom: $r12;
    font-size: $r16;
    color: #030303;

    img {
      width: $r18;
      height: $r13;
      margin-right: $r10;
    }
  }

  .gk-yc-success {
    font-size: $r18;
    color: #027F59;
    letter-spacing: 0;
    padding: $r10;
    margin-top: $r15;

    img {
      width: $r22.1;
      height: $r17.8;
      margin-right: $r10;
    }
  }

  .gk-yc-intro {
    overflow: hidden;

    .img {
      width: $r100;
      height: $r100;
      float: left;
      margin-right: $r20;
    }

    .gk-yc-intro-detail {
      font-size: $r14;
      color: #030303;
      letter-spacing: 0;
      padding-top: $r20;

      p:last-child {
        margin-top: $r20;
      }
    }
  }

  .btnVip {
    display: inline-block;
    background: #027F59;
    border-radius: 2px;
    width: $r200;
    height: $r36;
    font-size: $r16;
    color: #FFFFFF;
    letter-spacing: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: $r30 auto;

    img {
      margin-right: $r6;
      width: $r15.3;
      height: $r17.5;
    }
  }

  #verify-success {
    display: none;
  }
}

@media only screen and (min-width: 320px) and (max-width: 320px) {
  html {
    font-size: 14px;
  }
}
</style>
