<script>
export default {
  name: "Content",
  props: {
    pans: {
      //[Tab,Tab.....]
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  render() {
    // jsx 语法
    return (
      <div>
        {this.pans.map(
          (Tab) => {
            return (
              // echarts 不会重新渲染，要用style的方式
              <div style={{ display: Tab.isActive ? "block" : "none" }}>
                {Tab.$slots.default}
              </div>
            );
          }
          // (Tab.isActive ? Tab.$slots.default : null)
        )}
      </div>
    );
  },
};
</script>
