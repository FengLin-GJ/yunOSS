<template>
  <div id="main">
    <div v-for="(item,index) in file" :key="index" class="box">
      <div class="pic">
        <Card :url="item.path" :title="item.file_name"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "imageList",
  components: {
    Card
  },
  data() {
    return {
      file: ""
    };
  },
  methods: {
    loadAll() {
      axios.get("/api/springboot/lucky?dir_name=Image").then(response => {
        this.file = response.data;
      });
    }
  },
  mounted() {
    this.loadAll();
  }
};
</script>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
}
#main {
  -webkit-column-width: 202px;
  -moz-column-width: 202px;
  -o-column-width: 202px;
  -ms-column-width: 202px;
  column-width: 202px;
  -webkit-column-rule: 2px dashed rgb(170, 180, 187);
  -moz-column-rule: 2px dashed rgb(170, 180, 187);
  -o-column-rule: 2px dashed rgb(170, 180, 187);
  -ms-column-rule: 2px dashed rgb(170, 180, 187);
  column-rule: 2px dashed rgb(170, 180, 187);
  -webkit-column-gap: 5px;
  -moz-column-gap: 5px;
  -o-column-gap: 5px;
  -ms-column-gap: 5px;
  column-gap: 5px;
  position: relative;
  float: left;
}
.box {
  float: left;
  padding: 10px 0 0 10px;
}
.pic{
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}
</style>