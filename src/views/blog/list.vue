<template>
  <!--  <el-dialog title="维度欺诈" :visible.sync="dialogFormVisible"-->
  <!--             @close="$emit('status', false)" width="30%">-->
  <!--    <el-form :model="validateForm" :rules="tags" ref="validateForm" label-width="150px">-->

  <!--      <span v-for="(keyItem, index) in Object.keys(forItem)" :key="index">-->
  <!--                <el-form-item label="维度:">-->
  <!--          {{ itemKv[keyItem] }}-->
  <!--        </el-form-item>-->
  <!--        <el-form-item label="纬度值:">-->
  <!--          {{ forItem[keyItem] }}-->
  <!--        </el-form-item>-->
  <!--                <el-form-item label="锁定期限" prop="lockTimeMap[index]">-->
  <!--          <el-select filterable v-model="validateForm.lockTimeMap[keyItem]" placeholder="请选择">-->
  <!--            <el-option-->
  <!--                v-for="item in lockTimes"-->
  <!--                :key="item.value"-->
  <!--                :label="item.label"-->
  <!--                :value="item.value">-->
  <!--            </el-option>-->
  <!--          </el-select>-->
  <!--        </el-form-item>-->
  <!--      </span>-->

  <!--    </el-form>-->
  <!--  </el-dialog>-->

  <span
      v-for="item in list"
      :key="item.title">
                <el-form-item label="维度:">
                      <el-link
                          style="color: #1482f0"
                          @click="toWeb(item.url)"
                      >
              {{ item.title }}
            </el-link>
        </el-form-item>
        <el-form-item label="纬度值:">
          {{ item.url }}
        </el-form-item>
      </span>

</template>

<script>


import {getColobuList} from "@/api/blog/list";

export default {
  name: 'blog',
  props: ['isPop', 'forItem', 'itemKv', 'creditNo'],
  data() {
    return {
      loading: false,
      list: [],

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
        this.list = response.data.list
        this.loading = false
        console.log("response.data", response.data);
        console.log("response.data.data", response.data.data);
        console.log("getColobuList", this.list);
      }).catch((err) => {
        console.log(err);
      });
    },

    toWeb(url) {
      window.open(url, "_blank")
    }
  },
}
</script>

<style scoped>

</style>
