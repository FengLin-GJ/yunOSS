<template>
  <span class="Tag">
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    ><span @click="ancherTag(tag)" style="cursor:pointer;">{{tag}}</span></el-tag>
  </span>
</template>

<script>
export default {
  name: "Tag",
  props: ["value"],
  data() {
    return {
      dynamicTags: []
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
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
  mounted() {},
  watch: {
    value: function(val) {
      if (this.dynamicTags.indexOf(val) == -1) {
        if (this.dynamicTags.length == 4) {
          this.dynamicTags.splice(0, 1);
        }
        this.dynamicTags.push(val);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.el-tag + .el-tag {
  margin-left: 10px;
}
</style>
