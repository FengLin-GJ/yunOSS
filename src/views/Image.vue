<template>
  <div>
    <br />
    <el-upload
      class="upload-demo"
      drag
      enctype="multipart/form-data"
      action="/api/springboot/upload"
      :on-success="success"
      :on-progress="openFullScreen"
      :file-list="fileList"
      accept=".jpg, .png"
      list-type="picture"
      multiple
      v-loading.fullscreen.lock="fullscreenLoading"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传.jpg/.png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "Image",
  data() {
    return {
      fileList: [],
      fullscreenLoading: false
    };
  },
  methods: {
    success() {
      this.$notify({
        title: "上传成功",
        type: "success",
        position: "top-right",
        offset: 250
      });
    },
    openFullScreen(){
      this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
    }
  }
};
</script>

<style lang="scss">
</style>