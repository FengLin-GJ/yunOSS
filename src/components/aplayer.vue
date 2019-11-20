<template>
  <div>
    <div style="padding:10px 0;" :id="title">
      <aplayer autoplay :music="musicList"></aplayer>
    </div>
  </div>
</template>  
  
<script>
import aplayer from "vue-aplayer";

export default {
  name: "Aplayer",
  props: ["url", "title"],
  components: {
    aplayer: aplayer
  },
  data() {
    return {
      musicList: {
        author: "",
        pic: "",
        lrc: ""
      }
    };
  },
  computed: {},
  mounted() {
    this.musicList = {
      title: this.title,
      url: this.url,
      author: " ",
      pic: "",
      lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
    };
  }
};
</script>  
  
<style lang="scss" scoped type="text/css">
</style> 