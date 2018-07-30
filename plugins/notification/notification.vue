<template>
  <div class="notification animated bounceIn">
    <p>{{content}}</p>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      tyoe: String
    }
  },
  data () {
    return {
      notices: []
    }
  },
  mounted () {
    this.$nextTick(function(){
      var notification = document.querySelector('.notification')
      notification.style.marginLeft = - notification.offsetWidth / 2 + 'px'
    })
  }
}
</script>
<style lang="stylus">
b = 37.5px

px2rem(a)
  unit((a / b) / 2, 'rem')

.notification{
  position: fixed;
  left: 50%;
  top: 42%;
  z-index: 99999999999;
  max-width: 200px;
  padding: px2rem(50px) px2rem(40px);
  text-align: justify;
  display: table-cell;
  vertical-align: middle;
  border-radius: 8px;
  background: rgba(0,0,0,0.7);
  color: #fff;
  font-size: 13px;

  p{
    margin-top: 0;
    margin-bottom: 0;
    line-height: 17px;
    word-break: break-all;
  }
}
</style>
