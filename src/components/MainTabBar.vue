<template>
  <TabBar>
    <TabBarItem path='/movie' activeColor='red'>
      <img slot='item-icon' src="../assets/img/tabbar/home.svg" alt="">
      <img slot='item-icon-active' src="../assets/img/tabbar/home_active.svg" alt="">
      <p slot='item-text'>电影</p>
    </TabBarItem>
    <TabBarItem path='/cinema' activeColor='red'>
      <img slot='item-icon' src="../assets/img/tabbar/category.svg" alt="">
      <img slot='item-icon-active' src="../assets/img/tabbar/category_active.svg" alt="">
      <p slot='item-text'>影院</p>
    </TabBarItem>
    <TabBarItem path='/mine' activeColor='red'>
      <img slot='item-icon' src="../assets/img/tabbar/shopcart.svg" alt="">
      <img slot='item-icon-active' src="../assets/img/tabbar/shopcart_active.svg" alt="">
      <p slot='item-text'>我的</p>
    </TabBarItem>
    <!-- <TabBarItem path='/profile' activeColor='red'>
      <img slot='item-icon' src="../assets/img/tabbar/profile.svg" alt="">
      <img slot='item-icon-active' src="../assets/img/tabbar/profile_active.svg" alt="">
      <p slot='item-text'>我的</p>
    </TabBarItem> -->
  </TabBar>
</template>
<script>
import TabBar from './tabbar/Tabbar.vue'
import TabBarItem from './tabbar/TabBarItem.vue'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style lang="scss" scoped>
</style>
