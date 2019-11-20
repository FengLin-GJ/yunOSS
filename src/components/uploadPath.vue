<template>
  <div>
    {{type1}}上传地址:{{input1}}
    <el-button type="text" @click="open1">设置</el-button>
  </div>
</template>

<script>
export default {
  name: "uploadPath",
  props: ["type1"],
  data() {
    return {
      input1: ""
    };
  },
  watch: {
    input1: function(val) {
      this.$emit("func", val);
    }
  },
  methods: {
    open1() {
      this.$prompt("请输入" + type1 + "上传地址", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          (this.input1 = value),
            this.setuploadPath(value),
            this.$message({
              type: "success",
              dangerouslyUseHTMLString: true,
              message: "你的" + type1 + "上传地址设置为: " + value
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    setuploadPath(value){
      switch(this.type1){
        case '图片' :
        localStorage.setItem("imagePath", value);
        break;
        case '音乐' :
        localStorage.setItem("musicPath", value);
        break;
        case '视频' :
        localStorage.setItem("videoPath", value);
        break;
        default :break;
      }
    },
    getuploadPath(){
      switch(this.type1){
        case '图片' :
        this.input1=localStorage.getItem("imagePath");
        break;
        case '音乐' :
        this.input1=localStorage.getItem("musicPath");
        break;
        case '视频' :
        this.input1=localStorage.getItem("videoPath");
        break;
        default :break;
      }
    }
  },
  mounted() {
    this.getuploadPath();
  }
};
</script>

<style lang="scss" scoped>
</style>