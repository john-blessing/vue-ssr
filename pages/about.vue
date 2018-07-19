<template>
  <div>
    关于
    <button @click="handleClick"></button>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "关于",
      meta: [
        {
          name: "keywords",
          content: "主站,北京"
        }
      ]
    }
  },
  methods: {
    handleClick() {
      window.location.href = '/'
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
