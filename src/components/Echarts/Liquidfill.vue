<template>
  <div class="wrapper">
    <div
      class="myChart"
      ref="myChart"
      :style="{
        width: `${width}`,
        height: `${height}`,
      }"
    ></div>
  </div>
</template>

<script>
var option = {
  series: [
    {
      type: "liquidFill",
      data: [0.4, 0.5, 0.4, 0.3],
      itemStyle: {
        normal: {
          shadowBlur: 0,
        },
      },
      radius: "100%",
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 1,
          borderColor: "#156ACF",
          shadowBlur: 20,
          shadowColor: "rgba(255, 0, 0, .1)",
        },
      },
      label: {
        show: true,
        color: "#294D99",
        insideColor: "#fff",
        fontSize: 20,
        fontFamily: "Regular",
        align: "center",
        baseline: "middle",
      },
      //   emphasis: {
      //     itemStyle: {
      //       opacity: 0.1,
      //     },
      //   },
    },
  ],
};
export default {
  components: {},
  props: {
    width: {
      type: String,
      defalute: "100px",
    },
    height: {
      type: String,
      defalute: "100px",
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.draw(option);
  },
  watch: {},
  computed: {},
  methods: {
    draw(option) {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>