<template>
  <div>
    <br />
    <el-upload
      class="upload-demo"
      ref="upload"
      action="/api/springboot/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="success"
      :file-list="fileList"
      :auto-upload="false"
      :data="{uploadPath,uploadPath}"
      accept=".jpg,.png"
      list-type="picture"
    >
      <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" plain @click="submitUpload">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      <br />
      <uploadPath type1="图片" @func="getMsgFormSon"></uploadPath>
      <div slot="tip" class="el-upload__tip">支持上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
import uploadPath from "@/components/uploadPath";

export default {
  name: "Image",
  components: {
    uploadPath
  },
  data() {
    return {
      fileList: [],
      upload:'',
      uploadPath:''
    };
  },
  methods: {
    submitUpload(file) {
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
      upload=this.file;
    },
    getMsgFormSon(data){
      this.uploadPath=data;
    }
  }
};
</script>

<style lang="scss">
</style>