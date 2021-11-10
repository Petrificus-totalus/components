# 安装 echarts

`npm i echarts@4.x`

# 使用

1. 复制两个文件 ，可以放入 `plugins` 文件夹中因为他属于插件
2. `main.js` 中引入相应的地图并注册

```javascript
// 引入我们写的插件
import echarts from "./plugins/echarts";
// 引入两个地图
import "../node_modules/echarts/map/js/china";
import "../node_modules/echarts/map/js/world";
Vue.use(echarts);
```

3. 页面中使用

```r
<div id="chinaMap" style="{ width: 375px; height: 400px;}"></div>
<div id="line" style="{ width: 375px; height: 400px;}"></div>

const data = [
    {
        name: "内蒙古",
        value: 10,
    },
    {
        name: "青海",
        value: 50,
    },
    ......
]
mounted(){
   axios.get('xxx').then(res => {
     this.$echarts.chinaMap("chinaMap", res.data);  // res.data 的形式如 data 所示
     this.$echarts.line("line");
   })        
}
```

4. `nameMap.js` 在需要用世界地图时用，将英文转换为中文。不用世界地图不用引入，并删掉 `echarts.js` 中的 `import nameMap from "./nameMap";` 以及 `worldMap` 的 `option` 中的 `nameMap` 



# 省市地图

```javascript
// main.js 引入省地图
import "../node_modules/echarts/map/js/province/anhui";
import "../node_modules/echarts/map/js/province/aomen";
import "../node_modules/echarts/map/js/province/beijing";
import "../node_modules/echarts/map/js/province/chongqing";
import "../node_modules/echarts/map/js/province/fujian";
import "../node_modules/echarts/map/js/province/gansu";
import "../node_modules/echarts/map/js/province/guangdong";
import "../node_modules/echarts/map/js/province/guangxi";
import "../node_modules/echarts/map/js/province/guizhou";
import "../node_modules/echarts/map/js/province/hainan";
import "../node_modules/echarts/map/js/province/hebei";
import "../node_modules/echarts/map/js/province/heilongjiang";
import "../node_modules/echarts/map/js/province/henan";
import "../node_modules/echarts/map/js/province/hubei";
import "../node_modules/echarts/map/js/province/hunan";
import "../node_modules/echarts/map/js/province/jiangsu";
import "../node_modules/echarts/map/js/province/jiangxi";
import "../node_modules/echarts/map/js/province/jilin";
import "../node_modules/echarts/map/js/province/liaoning";
import "../node_modules/echarts/map/js/province/neimenggu";
import "../node_modules/echarts/map/js/province/ningxia";
import "../node_modules/echarts/map/js/province/qinghai";
import "../node_modules/echarts/map/js/province/shandong";
import "../node_modules/echarts/map/js/province/shanghai";
import "../node_modules/echarts/map/js/province/shanxi";
import "../node_modules/echarts/map/js/province/shanxi1";
import "../node_modules/echarts/map/js/province/sichuan";
import "../node_modules/echarts/map/js/province/taiwan";
import "../node_modules/echarts/map/js/province/tianjin";
import "../node_modules/echarts/map/js/province/xianggang";
import "../node_modules/echarts/map/js/province/xinjiang";
import "../node_modules/echarts/map/js/province/xizang";
import "../node_modules/echarts/map/js/province/yunnan";
import "../node_modules/echarts/map/js/province/zhejiang";
```

## 页面中

```r
<div id="provinceMap"  style="{ width: 375px; height: 400px;}"></div>
mounted() {
    this.$echarts.provinceMap("provinceMap", '北京');
},
```

