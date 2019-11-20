<template>
  <div>
    <br />
    <el-upload
      class="upload-demo"
      ref="upload"
      action="/api/springboot/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
      :on-success="success"
      :data="{uploadPath,uploadPath}"
      accept=".mp4,.qlv"
      list-type="picture"
    >
      <el-button slot="trigger" size="small" type="primary">选取视频</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      <br />
      <uploadPath type1="视频" @func="getMsgFormSon"></uploadPath>
      <div slot="tip" class="el-upload__tip">支持上传.mp4,.qlv文件，且不超过500G</div>
    </el-upload>
  </div>
</template>

<script>
import uploadPath from "@/components/uploadPath";

export default {
  name: "Video",
  components: {
    uploadPath
  },
  data() {
    return {
      fileList: [],
      uploadPath:''
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    success(){
      this.$notify({
        title: "上传成功",
        type: "success",
        position: 'top-right',
        offset: 250
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    getMsgFormSon(data){
      this.uploadPath=data;
    }
  }
};
</script>

<style lang="scss">
</style>