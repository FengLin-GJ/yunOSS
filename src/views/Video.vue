<template>
  <div>
    <br />
    <el-upload
      class="upload-demo"
      drag
      enctype="multipart/form-data"
      action="/api/springboot/upload"
      :on-success="success"
      :file-list="fileList"
      accept=".mp4"
      list-type="picture"
      multiple
      v-loading.fullscreen.lock="fullscreenLoading"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传.mp4文件，且不超过500G</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      fileList: []
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
    } 
  }
};
</script>

<style lang="scss">
</style>