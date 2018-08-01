<template>
    <div class="summer-read-header" :class="isIos ? 'inIOS' : ''">
      <span class="summer-read-header__left" @click="handleGoBack"><img v-if="!noArrow" src="~/assets/images/nav_icon.png" alt=""></span>
      <p class="summer-read-header__content">{{headname}}</p>
      <span class="summer-read-header__right"></span>
    </div>
</template>
<script>
import * as Util from '~/utils/base'
export default {
  props: {
    headname: {
      default: ''
    },
    toUrl: {
      default: ''
    },
    noArrow: {
      default: false
    }
  },
  data() {
    return {
      isIos: ''
    }
  },
  methods: {
    handleGoBack () {
      if (this.toUrl) {
        this.$router.push({
          path: this.toUrl
        });
        return 
      }
      this.$router.back();
    }
  },
  mounted(){
    this.isIos = Util.IsIOS()
  }
}
</script>
<style lang="stylus">
$base-font-size = 37.5px

px2rem($px) {
  return unit(($px / $base-font-size) / 2, 'rem');
}
.inIOS {
  padding-top: px2rem(60px);
  padding-bottom: px2rem(42px);
}

.summer-read-header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: px2rem(100px);
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  padding-left: px2rem(33px);
  padding-right: px2rem(33px);
  box-sizing: border-box;


  .summer-read-header__left, .summer-read-header__right{
    flex: 0 0 px2rem(80px);
    display: flex;
    align-items: center;
  }
  .summer-read-header__left{
    img{
      width: px2rem(20px);
    }
  }
  .summer-read-header__content{
    font-size: px2rem(34px);
  }
  p, span{
    color: #333;
  }
}
</style>
