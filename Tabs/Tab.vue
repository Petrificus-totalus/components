<template>
  <li :class="['tab', { active: isActive }]" @click="tabClick">{{ label }}</li>
</template>
<script>
export default {
  name: "Tab",
  props: {
    label: {
      type: String,
      default: "",
    },
    index: {
      type: [String, Number],
      default: "1",
    },
  },
  mounted() {
    //this 是当前组件 Tab
    this.$parent.pans.push(this);
  },
  computed: {
    isActive() {
      // Tabs 的 currentIndex === Tab 的index时选中style
      return this.$parent.currentIndex === this.index;
    },
  },
  methods: {
    tabClick() {
      this.$parent.getTabIndex(this.index); // slot 不能用 $emit
    },
  },
};
</script>
<style scoped>
.tab {
  flex: 1;
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  text-align: center;
}
.tab.active {
  border-bottom: 2px solid #00f;
}
</style>
