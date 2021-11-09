# 外观

<img src="outline.png" alt="outline" style="zoom:50%;" />

轮播图下面有按钮代替了 `pagination` 那几个点

# 使用

1. `npm install swiper vue-awesome-swiper --save`

```js
// 使用时的版本
"swiper": "^5.4.5",
"vue-awesome-swiper": "^4.1.1",
```

2. 页面中使用

```r
<SwiperButton :imgs="imgs" />

// img 是图片地址，title 是按钮的内容
imgs: [
        { img: require("../assets/1.png"), title: "新增疑似/新增确诊" },
        { img: require("../assets/2.png"), title: "现存疑似/现存确诊" },
        { img: require("../assets/3.png"), title: "死亡/治愈" },
        { img: require("../assets/4.png"), title: "病死率" },
        { img: require("../assets/5.png"), title: "治愈率" },
      ],
```
