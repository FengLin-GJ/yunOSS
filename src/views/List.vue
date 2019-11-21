<template>
  <div>
    <el-container>
      <el-header class="header">
        <el-autocomplete
          class="inline-input"
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          ref="input"
          @select="handleSelect"
          @keyup.enter.native="handleEnter"
          style="width:45%;"
        ></el-autocomplete>
        <el-button
          type="primary"
          icon="el-icon-search"
          style="margin-left: 25px;"
          @click="addTag"
        >搜索</el-button>
        <div style="margin-top:9px;background-color: #ffffff">最近访问：<Tag :value="tagValue"></Tag></div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">
            <router-link :to="{name: 'imageList'}" style="text-decoration:none;">
              <h3>图片</h3>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link :to="{name: 'musicList'}" style="text-decoration:none;">
              <h3>音乐</h3>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link :to="{name: 'videoList'}" style="text-decoration:none;">
              <h3>视频</h3>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-main style="margin-top:65px;">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Tag from "@/components/Tag";

export default {
  name: "List",
  components: {
    Tag
  },
  data() {
    return {
      restaurants: [],
      tagValue: "",
      state: ""
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      this.restaurant = [];
      axios.get("/api/springboot/searchList").then(response => {
        for (var i = 0; i < response.data.length; i++) {
          var fileSearch =
            response.data[i].file_name +
            " " +
            "(" +
            response.data[i].type +
            ")";
          this.restaurant.push({ value: fileSearch });
        }
      });
      return this.restaurant;
    },
    handleEnter() {
      if (this.state !== "") {
        this.tagValue = this.state;
        this.ancherTag(this.state);
        this.state="";
      }
    },
    handleSelect(){
      this.$refs['input'].focus();
    },
    addTag() {
      if (this.state !== "") {
        this.tagValue = this.state;
        this.ancherTag(this.state);
        this.state="";
      }
    },
    ancherTag(tag){
      var type=tag.substring(tag.lastIndexOf('(')+1,tag.lastIndexOf(')'));
      switch(type){
        case '图片' : 
        this.$router.push({ name: "imageList" });
        break;
        case '音乐' : 
        this.$router.push({ name: "musicList" });
        break;
        case '视频' : 
        this.$router.push({ name: "videoList" });
        break;
        default : break;
      } 
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
  height: auto;
  left: 0px;
  top: 0px;
  padding-top: 10px;
  background-color: #ffffff;
  z-index: 100;
  flex-flow: row nowrap;
  justify-content: space-around;
}
</style>