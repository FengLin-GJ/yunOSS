<template>
  <div>
    <div v-for="(item,index) in file" :key="index">
      <videos :name="item.file_name" :path="item.path"></videos>
    </div>
  </div>
</template>

<script>
import videos from "@/components/videos";

export default {
  name: "videoList",
  components: {
    videos
  },
  data() {
    return {
      file: ""
    };
  },
  methods: {
    loadAll() {
      axios.get("/api/springboot/lucky?dir_name=Video").then(response => {
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