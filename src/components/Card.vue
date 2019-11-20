<template>
  <div class="card">
    <img :src="url" alt="" :id="title">{{title}}
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["url", "title"],
  data() {
    return {
    
    };
  },
  methods: {
     
  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">
 .card img{
  display: block;
  width:165px;
  height: auto;
}
</style>
