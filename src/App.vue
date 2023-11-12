<template>
  <div>
    <div class="hello">Hello Vue1!</div>
    <img src="./img/logo.jpeg" class="logo"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.hello {
    color: red;
}
.logo {
    width: 100px;
    height: 100px;
}
</style>