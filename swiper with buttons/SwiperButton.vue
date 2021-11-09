<template>
  <div class="chart">
    <h3 class="title">全国</h3>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in imgs" :key="index"
        ><img :src="item.img" :alt="item.img"
      /></swiper-slide>
    </swiper>
    <ul class="navigator">
      <li
        @click="handleClick(index)"
        class="navigatorItem"
        v-for="(item, index) in imgs"
        :key="index"
        :class="{ active: index == currentIndex }"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    let that = this;
    return {
      currentIndex: 0,
      swiperOptions: {
        autoplay: {
          disableOnInteraction: false, // 否则点击完就不自动播放了
          delay: 2000,
        },
        on: {
          // 这个回调只有早滑动之后调用，this.swiper.slideTo 那个滑动后不回调
          slideChangeTransitionEnd: function () {
            that.currentIndex = this.activeIndex;
            // this.activeIndex //切换结束时，告诉我现在是第几个slide
          },
        },
      },
    };
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index;
      this.swiper.slideTo(index, 1000, false);
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style scoped>
.chart {
  position: relative;
  background: #fff;
  padding: 0.16rem 0;
}
.chart .title {
  font-size: 0.3rem;
  margin: 0 0 0.08rem 0.16rem;
}
.navigator {
  font-size: 0.12rem;
  list-style: none;
  display: flex;
  padding: 0 0.16rem;
  justify-content: center;
  margin: 0.06rem 0 0;
}
.navigatorItem {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
  width: calc(20% - 0.02rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.045rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.02rem;
  margin-left: 0.025rem;
}

.active {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
}
</style>
