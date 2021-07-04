<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <!-- 不传activeColor就是定义的默认颜色red,这样颜色也抽离了 -->
      <tab-bar-item path="/home" activeColor="deeppink">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/catagory" activeColor="deeppink">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deeppink">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";
import TabBarItem from "./components/TabBar/TabBarItem";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style>
@import "./assets/css/base.css";
</style>
