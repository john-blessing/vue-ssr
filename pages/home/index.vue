<template>
    <h1 id="h1" class="h1">hello world</h1>
</template>
<script>
export default {
  head() {
    return {
      title: "首页",
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
      dataList: []
    };
  },
  validate({ query, store }) {
    store.commit("set_title", query.name);
    return true;
  },
  async asyncData({ store }) {
    let dataList = await store.dispatch("getSites").catch(error => {
      console.log(error);
    });
    return {
      dataList
    };
  },
  methods: {
    getInfo() {
      console.log("==>enter");
    }
  }
};
</script>
<style lang="stylus" scoped>
f20 = 20px;
color = blue;

blur1(v) {
    opacity: v;
}

h1 {
    blur1: 0.2;
}
</style>
