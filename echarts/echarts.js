import echarts from "echarts";

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $echarts: {
      get() {
        return {
          line: function (id) {
            var dom = document.getElementById(id);
            var mychart = echarts.init(dom);
            var option = {
              xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              },
              yAxis: {
                type: "value",
              },
              series: [
                {
                  data: [150, 230, 224, 218, 135, 147, 260],
                  type: "line",
                },
              ],
            };
            mychart.setOption(option, true);
          },
          chinaMap: function (id, data) {
            var mychart = echarts.init(document.getElementById(id));
            var option = {
              // 提示框组件
              tooltip: {
                trigger: "item", // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
                // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                // 使用函数模板  传入的数据值 -> value: number | Array
                formatter: function (val) {
                  return val.data.name + ": " + val.data.value;
                },
              },
              // 视觉映射组件
              visualMap: [
                {
                  type: "piecewise",
                  pieces: [
                    { min: 0, max: 0, color: "#fff" },
                    { min: 1, max: 10, color: "#fdfdcf" },
                    { min: 10, max: 100, color: "#fe9e83" },
                    { min: 100, max: 1000, color: "#e55a4e" },
                    { min: 1000, max: 10000, color: "#4f070d" },
                  ],
                },
              ],
              series: [
                {
                  name: "省",
                  type: "map",
                  map: "china",
                  roam: false, // 自动缩放
                  zoom: 1.2,
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        fontSize: 8,
                      },
                    },
                  },
                  itemStyle: {
                    normal: {
                      areaColor: "rgba(0,255,236,0)",
                      borderColor: "rgba(0,0,0,0.2)",
                    },
                    emphasis: {
                      areaColor: "rgba(255,180,0,0.8)",
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderWidth: 0,
                      shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                  },
                  data,
                },
              ],
            };
            mychart.setOption(option, true);
          },
          worldMap: function (id, data) {
            var dom = document.getElementById(id);
            var mychart = echarts.init(dom);
            var option = {
              // 提示框组件
              tooltip: {
                trigger: "item", // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
                // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                // 使用函数模板  传入的数据值 -> value: number | Array
                formatter: function (val) {
                  return val.data.name + ": " + val.data.value;
                },
              },
              // 视觉映射组件
              visualMap: [
                {
                  type: "piecewise",
                  pieces: [
                    { min: 0, max: 0, color: "#fff" },
                    { min: 1, max: 10, color: "#fdfdcf" },
                    { min: 10, max: 100, color: "#fe9e83" },
                    { min: 100, max: 1000, color: "#e55a4e" },
                    { min: 1000, max: 10000, color: "#4f070d" },
                  ],
                },
              ],
              series: [
                {
                  name: "世界地图",
                  type: "map",
                  map: "world",
                  roam: false, // 自动缩放
                  zoom: 1.2,
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        fontSize: 8,
                      },
                    },
                  },
                  itemStyle: {
                    normal: {
                      areaColor: "rgba(0,255,236,0)",
                      borderColor: "rgba(0,0,0,0.2)",
                    },
                    emphasis: {
                      areaColor: "rgba(255,180,0,0.8)",
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderWidth: 0,
                      shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                  },
                  data,
                },
              ],
            };
            mychart.setOption(option, true);
          },
        };
      },
    },
  });
};

export default install;
