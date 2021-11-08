# 介绍

`vue` 项目的 `tab` 栏组件

# 使用

1. 复制四个文件
2. `main.js` 中引入并注册

```javascript
import tabs from "./components/tabs";
Vue.use(tabs);
```

3. 页面中使用

```r
<Tabs :currentIndex="currentIndex" @onIndex="handleIndex">
      <Tab index="1" label="food"><div>content1</div></Tab>
      <Tab index="2" label="movie"><div>content2</div></Tab>
</Tabs>
methods: {
    handleIndex(index) {
      this.currentIndex = index;
    },
},
data() {
    return {
      currentIndex: "1",
    };
},
```
