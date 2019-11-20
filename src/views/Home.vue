<template>
  <div class="home">
    <router-view />
    <ul class="footer">
      <li class="icons">
        <router-link :to="{name: 'imageList'}">列表</router-link>
      </li>
      <li class="icons">
        <router-link :to="{name: 'upload'}">上传</router-link>
      </li>
      <li class="icons">
        <router-link :to="{name: 'user'}">我的</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {
    // HelloWorld
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
$main-color: #42b983;
.footer {
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 60px;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.icons {
  font-size: 16px;
  flex: 1;
  text-align: center;
  background: #f5f5f5;
  border-top: 1px solid $main-color;
  a {
    color: $main-color;
    display: block;
    &.active {
      color: #fff;
      background: $main-color;
    }
  }
}
</style>