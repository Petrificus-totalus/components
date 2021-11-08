<template>
  <div>
    <ul class="tabs-header">
      <slot></slot>
    </ul>
    <Content :pans="pans" />
  </div>
</template>
<script>
import Content from "./Content";
export default {
  name: "Tabs",
  props: {
    currentIndex: {
      type: [String, Number],
      default: "1",
    },
  },
  data() {
    return {
      pans: [],
    };
  },
  methods: {
    getTabIndex(tabIndex) {
      this.$emit("onIndex", tabIndex);
    },
  },
  components: {
    Content,
  },
};
</script>

<style scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>
