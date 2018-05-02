<template>
    <h1>hello world</h1>
</template>
<script>
export default {
  validate({ params }) {
    console.log(params);
    return params;
  }
};
</script>
<style lang="stylus" scoped>
</style>
