import echarts from "echarts";
import nameMap from "./nameMap";
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
                // 不加这两个属性不让点
                triggerOn: "click",
                enterable: true,
                formatter: function (val) {
                  // 点击后跳到界面
                  return `<a href='/#/city/${val.name}' style="color:#fff;"><div>${val.name}:${val.value}</div></a>`;
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
              //提示框组件
              tooltip: {
                formatter: function (val) {
                  return (
                    val.name + ": " + (isNaN(+val.value) ? "0" : val.value)
                  );
                },
              },
              // 视觉映射组件
              visualMap: [
                {
                  type: "piecewise",
                  pieces: [
                    { min: 0, max: 0, color: "#fff" },
                    { min: 1, max: 1000, color: "#fdfdcf" },
                    { min: 1000, max: 10000, color: "#fe9e83" },
                    { min: 10000, max: 500000, color: "#e55a4e" },
                    { min: 500000, max: 1000000000, color: "#4f070d" },
                  ],
                },
              ],
              series: [
                {
                  name: "世界地图",
                  type: "map",
                  map: "world",
                  roam: true, // 自动缩放
                  zoom: 1.4,
                  label: {
                    normal: {
                      show: false,
                      textStyle: {
                        fontSize: 8,
                      },
                    },
                  },
                  nameMap, // 转换成中文显示  这样传过来的 data 可以是中文，因为接口疫情数据返回的是中文国家名
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
                    },
                  },
                  data,
                },
              ],
            };
            mychart.setOption(option, true);
          },
          provinceMap: function (id, city) {
            var mychart = echarts.init(document.getElementById(id));
            var option = {
              tooltip: {
                formatter: function (val) {
                  // 点击后跳到界面
                  return `<div>${val.name}:${val.value}</div>`;
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
                  name: "市",
                  type: "map",
                  map: city, // 中文
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
