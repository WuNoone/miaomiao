<template>
  <div>
    <Header title="我的喵喵" />
    <div id="content">
      <Login />
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
export default {
  components: {
    Header,
    Login
  }
};
</script>
<style lang='scss' scoped>
</style>