<template>
  <div class="header">
    <div class="left">
      <img src="@/assets/image/school/LOGO.png" />
      <div class="title">
        <h2 class="title_h2">智慧校园可视化管理平台</h2>
      </div>
    </div>
    <div class="center">
      <router-link
        :class="[href == item.path.split('/')[1] ? tab_span_act : tab_span]"
        :to="item.path"
        v-for="item in routerArr"
        :key="item.name"
      >
        {{ item.name }}
      </router-link>
    </div>
    <div class="right">
      <div class="time">
        <span class="nowtime">{{ nowTime }}</span>
        <span class="date">{{ nowDate }}</span>
        <span class="weekDate">{{ weekDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      routerArr: [
        { path: "/", name: "校园概况" },
        { path: "/Afts", name: "安防态势" },
        { path: "/Bxtx", name: "便携通行" },
      ],
      tab_span_act: "tab_span_act",
      tab_span: "tab_span",
      href: "",
      nowDate: "", //日期
      nowTime: "", //时间
      weekDate: "", //星期
    };
  },
  created() {
    this.href = window.location.href.split("/")[4];
    this.getTime();
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    /**
     * 获取时间
     */
    getTime() {
      const time = setInterval(() => {
        const date = new Date();
        const year = date.getFullYear();
        const month = this.format(date.getMonth() + 1);
        const day = this.format(date.getDate());
        const week = date.getDay();
        const hours = this.format(date.getHours());
        const minutes = this.format(date.getMinutes());
        const seconds = this.format(date.getSeconds());
        const arr = [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ];
        this.nowDate = `${year}-${month}-${day}`;
        this.nowTime = `${hours}:${minutes}:${seconds}`;
        this.weekDate = `${arr[week]}`;
      }, 1000);

      // 组件销毁前清除定时器
      this.$once("hook:beforeDestroy", () => {
        clearInterval(time);
      });
    },
    format(num) {
      return num >= 10 ? num : `0${num}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  background-color: yellow;
  display: flex;
  flex-direction: row;
  .left {
    width: 440px;
    position: relative;
    img {
      padding-left: 30px;
    }
    .title {
      width: 350px;
      line-height: 70px;
      color: #ffffff;
      position: absolute;
      left: 90px;
      top: 0;
      .title_h2 {
        padding-left: 13px;
        font-size: 30px;
      }
    }
  }
}
.center {
  width: 480px;
  margin: 0 auto;
  display: flex;
}
.right {
  width: 340px;
  background-color: red;
  position: relative;
  .time {
    position: absolute;
    left: 0;
    width: 187px;
    height: 70px;
    .nowtime {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      position: absolute;
      bottom: 6px;
    }
    .date {
      color: #fff;
      position: absolute;
      right: 14px;
      bottom: 0px;
    }
    .weekDate {
      color: #fff;
      position: absolute;
      right: 14px;
      top: 20px;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 8px;
      right: 0;
      height: 33px;
      width: 1px;
      background-color: #6a6e73;
    }
  }
}
.tab_span_act {
  color: #97dfff;
  font-size: 20px;
  font-weight: bold;
  width: 160px;
  text-align: center;
  line-height: 70px;
  background: url("../../../assets/image/school/一级标题选中态.png") no-repeat
    100%;
  background-position: 0% 3%;
}
.tab_span {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  width: 160px;
  text-align: center;
  line-height: 70px;
}
</style>