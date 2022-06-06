<template>


  <el-row :gutter="12">
    <el-col v-for="objItem in objList" :span="8">
      <el-card class="box-card">

        <ul class="infinite-list" style="overflow:auto">
      <span v-for="item in objItem.list" :key="item.index"
            class="text item">
<!--        <a>{{item.title }}</a>-->
        <span class="my_fav_laxist_li">

          <span shadow="hover">{{item.title}}</span>
            <el-tooltip :content="item.title" placement="top-start" effect="dark">
                    <el-link class="my_fav_list_a"
                             style="color: #1482f0"
                             @click="toWeb(item.url)">
               {{ item.title }}
            </el-link>
  </el-tooltip>

            </span>
          </span>
        </ul>

      </el-card>
    </el-col>
  </el-row>


  <template>
    <div class="demo-image__preview">
      <el-image
          style="width: 100px; height: 100px"
          :src="url"
          :preview-src-list="srcList">
      </el-image>
    </div>
  </template>


</template>

<script>


import {getColobuList} from "@/api/blog/list";

export default {
  name: 'BlogList',
  props: ['isPop', 'forItem', 'itemKv', 'creditNo'],
  data() {
    return {
      loading: false,
      objList: {},
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
        this.objList = response.data
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
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

//li {
//  text-align: -webkit-match-parent;
//  display: list-item;
//
//}

/* 修改表格的滚动条*/
.el-link__body-wrapper::-webkit-scrollbar {
  width: 5px;
  height: 10px;
}
//
///* 表格滚动条的滑块*/
//.el-table__body-wrapper::-webkit-scrollbar-thumb {
//  background-color: #c8c9cc;
//  border-radius: 3px;
//}

/**修改全局的滚动条*/
/**滚动条的宽度*/
::-webkit-scrollbar {
  width: 5px;
  /*竖向*/
  height: 5px;
  /*横向*/
}

/*滚动条的滑块*/
::-webkit-scrollbar-thumb {
  background-color: #c8c9cc;
  border-radius: 3px;
}


.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  margin-top: 50px;
  width: 380px;
}

.fav_list {
  min-height: 95%;
  padding: 0 32px 30px;
  margin-top: 50px;
  margin-right: 50px;
  margin-left: 200px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);

}

.fav_list_box {
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  zoom: 1;

}

.fav_list_title {
  height: 90px;
  line-height: 90px;
  /*border-bottom: 1px solid #e0e0e0;*/
  display: block;

}

.fav_list_title_h3 {
  display: inline;

}

.fav_num {
  font-size: 14px;
  color: #4d4d4d;
  margin-top: 30px;
  float: right;

}

.my_fav_con {
  display: block;

}

.my_fav_list {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  border: 0;
  display: block;
  overflow: hidden;
  zoom: 1;

}

.my_fav_list_li {
  padding: 16px 0;
  font-size: 0;
  border-top: 1px solid #e0e0e0;
  list-style: none;

}

.my_fav_list_a {
  width: 78%;
  line-height: 14px;
  font-size: 12px;
  vertical-align: middle;
  color: #4d4d4d;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;

}

.my_fav_list_label {
  margin-left: 10%;
  font-size: 16px;
  vertical-align: middle;
  display: inline-block;

}

.my_fav_list_label span {
  color: #ccc;
  margin-right: 15px;
  vertical-align: middle;
  display: inline-block;

}

.cancel_fav {
  font-style: normal;
  color: #999;
  vertical-align: middle;
  cursor: pointer;
  display: inline-block;

}

.my_fav_list_a:hover {
  color: red;

}
</style>
