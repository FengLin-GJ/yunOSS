<template>
  <div id="main">
    <viewer :images="file">
      <div class="box" v-for="(item,index) in file" :key="index">
        <div class="pic">
          <img :src="item.path" :onerror="errorImg" />
        </div>
      </div>
    </viewer>
  </div>
</template>

<script>

export default {
  name: "imageList",
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
  position: relative;
}
.box {
  float: left;
  padding: 15px 0 0 15px;
}
.pic {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  width: 165px;
}
.pic img {
  display: block;
  width: 165px;
  height: auto;
}
</style>