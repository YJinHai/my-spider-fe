<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <div class="foo"></div>
  <div class="foo"></div>
</template>

<script>
import {getColobuList} from "@/api/blog/list";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    this.getList()
  },

  methods: {

    getList() {
      //接口获取数据
      this.loading = true
      let data = {}

      getColobuList(data).then(response => {
        this.list = response.data.data
        this.loading = false
        console.log("response.data.data", response.data.data);
        console.log("getColobuList", this.list);
      }).catch((err) => {
        console.log(err);
      });
    },
  },


}
</script>

<style scoped>
.foo{}
</style>
