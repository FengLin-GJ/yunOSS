<template>
  <div>
    <div v-for="(item,index) in file" :key="index">
      <aplayer :url="item.path" :title="item.file_name"></aplayer>
    </div>
  </div>
</template>

<script>
import aplayer from "@/components/aplayer";

export default {
  name: "musicList",
  components: {
    aplayer
  },
  data() {
    return {
      file: ""
    };
  },
  methods: {
    loadAll() {
      axios.get("/api/springboot/lucky?dir_name=Music").then(response => {
        this.file = response.data;
      });
    }
  },
  mounted() {
    this.loadAll();
  }
};
</script>

<style scoped>
</style>