<template>
  <div class="tab-bur-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: false,
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      //home => item1(home) true
      //home =>item2(category) false
      //home =>item2(cart) false
      //home =>item2(prefile) false
      //没找到支委-1
      console.log("this.$route.path :>> ", this.$route.path);
      console.log("this.path :>> ", this.path);
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      //如果处于活跃状态，则改变颜色，如果不是，则是默认空对象
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
      // console.log("itemClick");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-bur-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bur-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 去除图片下面默认的3个像素 */
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>
