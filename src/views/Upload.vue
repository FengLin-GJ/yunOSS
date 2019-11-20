<template>
  <div>
    <div :style="{'text-align': 'center'}">
      <router-link :to="{name: 'image'}">
        <el-button type="success" round>上传图片</el-button>
      </router-link>
      <router-link :to="{name: 'music'}">
        <el-button type="success" round>上传音乐</el-button>
      </router-link>
      <router-link :to="{name: 'video'}">
        <el-button type="success" round>上传视频</el-button>
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "Upload",
  store,
  data() {
    return {
      
    };
  },
  methods: {
     
  }
};
</script>

<style scoped lang="scss">
 
</style>