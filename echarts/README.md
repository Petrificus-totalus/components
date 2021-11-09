# 安装 echarts

`npm i echarts@4.x`

# 使用

1. 复制 `echarts.js` ，可以放入 `plugins` 文件夹中因为他属于插件
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
    setTimeout(()=>{
        this.$echarts.chinaMap("chinaMap", data);
    },2000)
}
```
