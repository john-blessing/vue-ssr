<template>
    <h1 class="h1">hello world</h1>
</template>
<script>
export default {
  head() {
    return {
      title: "详情",
      meta: [
        {
          name: "keywords",
          content: "主站,北京"
        }
      ]
    };
  },
  validate({ params }) {
    console.log(params);
    return params;
  }
};
</script>
<style lang="stylus" scoped>
.h1 {
  color blue
}
</style>
