<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bur-item">首页</div>
      <div class="tab-bur-item">分类</div>
      <div class="tab-bur-item">购物车</div>
      <div class="tab-bur-item">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
@import "./assets/css/base.css";
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  /* 阴影 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.15);
}
/* 均等分 */
.tab-bur-item {
  flex: 1;
  height: 49px;
  text-align: center;
}
</style>
