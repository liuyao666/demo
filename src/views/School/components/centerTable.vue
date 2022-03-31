<template>
  <div class="anfang">
    <div class="anfang_table">
      <div class="t_header">
        <span>类型</span>
        <span>时间</span>
        <span>位置</span>
      </div>
      <div class="t_body" ref="list" @scroll="scrollEvent($event)">
        <ul :style="{ transform: getTransform }">
          <li
            v-for="(item, index) in listData"
            :key="index"
            :style="{
              height: itemSize + 'px',
              lineHeight: itemSize + 'px',
            }"
          >
            <span>{{ item.name }}</span>
            <span>{{ item.sex }}</span>
            <span>{{ item.email }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getGaojingAll } from "@/api/index.js";

export default {
  name: "anfang",
  components: {},
  props: {},
  data() {
    return {
      listData: [],
      //   列表每项高度itemSize
      itemSize: 30,

      //可视区域高度
      screenHeight: 0,
      //   偏移量startOffset startOffset = scrollTop - (scrollTop % itemSize)

      start: 0,
      //   visibleCount: null,
      //结束索引
      end: null,
    };
  },
  created() {},
  mounted() {
    this.getGaojingData();

    this.screenHeight = this.$refs.list.clientHeight;
    this.start = 0;
    // this.visibleCount = Math.ceil(this.screenHeight / this.itemSize);
    this.end = this.start + this.visibleCount;
  },
  watch: {},
  computed: {
    //列表总高度
    listHeight() {
      return this.listData.length * this.itemSize;
    },
    //可显示的列表项数
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize);
    },
    //偏移量对应的style
    getTransform() {
      return `translate3d(0,${this.startOffset}px,0)`;
    },
    //获取真实显示列表数据
    visibleData() {
      return this.listData.slice(
        this.start,
        Math.min(this.end, this.listData.length)
      );
    },
  },
  methods: {
    getGaojingData() {
      getGaojingAll().then((res) => {
        this.listData = res.data.data.list;
        console.log(this.listData);
      });
    },
    scrollEvent() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop;

      //   //此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize);

      //   //   //此时的结束索引
      this.end = this.start + this.visibleCount;
      console.log("start", this.start, this.end);

      console.log(this.visibleData);
      //   //   //此时的偏移量
      //   this.startOffset = scrollTop - (scrollTop % this.itemSize);
    },
  },
};
</script>
<style lang="scss" scoped>
.anfang {
  width: 100%;
  height: 362px;
  position: absolute;
  .anfang_table {
    position: absolute;
    width: 100%;
    height: 100%;
    .t_header {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      background-color: hsl(184, 56%, 39%);
      color: #fff;
      line-height: 30px;
    }
    .t_header span:nth-child(1) {
      display: block;
      width: 28%;
    }
    .t_header span:nth-child(2) {
      display: block;
      flex: 1;
    }
    .t_header span:nth-child(3) {
      display: block;
      width: 28%;
    }
    .t_body {
      height: 270px;
      overflow-y: scroll;
    }

    .t_body li {
      width: 100%;
      height: 30px;
      color: #fff;
      line-height: 30px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
    }
    .t_body li span:nth-child(1) {
      display: block;
      width: 28%;
    }
    .t_body li span:nth-child(2) {
      display: block;
      flex: 1;
    }
    .t_body li span:nth-child(3) {
      display: block;
      width: 28%;
    }
  }
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>