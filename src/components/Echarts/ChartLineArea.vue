<template>
  <div class="chartBox">
    <div
      class="myChart"
      ref="myChart"
      :style="{ width: width, height: height }"
    ></div>
    <ul class="legth" :style="{ top: legTop, left: legLeft }" v-if="legIsShow">
      <li v-for="(item, i) in legthWZ" :key="i">
        <h3 :style="{ backgroundColor: legthColor[i] }"></h3>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "pieGeRenNanDing",
  props: {
    rowData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    symbolSize: {
      type: [String, Number],
      default: () => {
        return 6;
      },
    },
    barColor: {
      type: Array,
      default: () => {
        return ["#04C8EB", "#80ECFF", "#80ECFF", "#80ECFF"];
      },
    },
    legthColor: {
      type: Array,
      default: () => {
        return ["#4BDBF4", "#EECC46", "#80ECFF", "#80ECFF"];
      },
    },
    legthWZ: {
      type: Array,
      default: () => {
        return [];
      },
    },
    unit: {
      type: String,
      default: () => {
        return "件";
      },
    },
    barWidth: {
      type: String,
      default: () => {
        return "32";
      },
    },
    width: {
      type: String,
      default: () => {
        return "410px";
      },
    },
    height: {
      type: String,
      default: () => {
        return "225px";
      },
    },
    legTop: {
      type: String,
      default: () => {
        return "10px";
      },
    },
    legLeft: {
      type: String,
      default: () => {
        return "2100px";
      },
    },
    legIsShow: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    fontStyle: {
      type: Object,
      default: () => {
        return {
          Xfont: {
            color: "#BFEBFF",
            fontSize: 16,
            fontFamily: "微软雅黑",
          },
          Yfont: {
            color: "#BFEBFF",
            fontSize: 14,
            fontFamily: "微软雅黑",
          },
          nameTextStyle: {
            color: "#BFEBFF",
            fontSize: 18,
            padding: 2,
            fontFamily: "微软雅黑",
          },
        };
      },
    },
    top: {
      type: String,
      default: () => {
        return "20%";
      },
    },
    left: {
      type: String,
      default: () => {
        return "1%";
      },
    },
  },
  data() {
    return {
      Xdata: [],
      Ydata: [],
      valTwo: [],
      setTime: null,
      chartInst: null,
    };
  },
  mounted() {
    // this.getData();
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach((item) => {
        this.Xdata.push(item.name);
        this.Ydata.push(item.value);
        this.valTwo.push(item.item);
      });
    }
    this.drawWidth();
    this.tooltipShuffling();
  },
  methods: {
    drawWidth() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        color: this.barColor[0],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: {
          top: this.top,
          left: this.left,
          right: "5%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            boundaryGap: false,
            type: "category",
            data: this.Xdata,
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              //x轴文字的配置
              textStyle: this.fontStyle.Xfont,
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#9FAFB5",
                width: 1.2, //这里是为了突出显示加上的
              },
            },
          },
        ],
        yAxis: [
          {
            name: `单位:${this.unit}`,
            position: "left",
            type: "value",
            nameTextStyle: this.fontStyle.nameTextStyle,
            // interval: 50,
            axisLabel: {
              //y轴文字的配置
              textStyle: this.fontStyle.Yfont,
            },
            splitNumber: 4,
            // 设置y轴线条的粗细
            splitLine: {
              show: false,
              lineStyle: {
                color: ["#0A223E"],
                width: 2,
                type: "solid",
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#9FAFB5",
                width: 1, //这里是为了突出显示加上的
              },
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(14,29,52,0.5)", "rgba(191,235,255,0.1)"],
                // color: ["rgba(238,238,238,0.1)", "rgba(238,238,238,.1)"],
              },
            },
          },
        ],
        series: [
          {
            type: "line",
            barWidth: this.barWidth,
            data: this.Ydata,
            smooth: true,
            // symbolSize: this.symbolSize,
            symbolSize: 5,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: this.barColor[0],
                },
              },
            },
            // smooth: true,
            areaStyle: {
              normal: {
                lineStyle: {
                  width: 30,
                  type: "solid",
                  shadowColor: "rgba(0,0,0,0)", //默认透明
                  shadowBlur: 5,
                  shadowOffsetX: 3,
                  shadowOffsetY: 3,
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: this.barColor[0],
                  },
                  {
                    offset: 1,
                    color: this.barColor[1],
                  },
                ]),
              },
            },
          },
        ],
      });
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: 0,
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: "downplay",
          seriesIndex: 0, //表示series中的第几个data数据循环展示
          dataIndex: currentIndex,
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
      }, 1000);
    },
  },
  beforeDestroy() {
    clearInterval(this.setTime);
  },
  watch: {
    rowData: {
      handler() {
        this.Xdata = [];
        this.Ydata = [];
        this.valTwo = [];
        this.rowData.forEach((item) => {
          this.Xdata.push(item.name);
          this.Ydata.push(item.value);
          this.valTwo.push(item.item);
        });
        this.chartInst.dispose();
        this.drawWidth();
        this.tooltipShuffling();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.chartBox {
  position: relative;
  .legth {
    position: absolute;
    left: 321px;
    top: 10px;
    width: 100%;
    li {
      float: left;
      // width: 200px;
      margin-right: 20px;
      height: 20px;
      h3 {
        float: left;
        width: 20px;
        height: 7px;
        margin-top: 10px;
        background-color: red;
      }
      span {
        margin-left: 7px;
        font-size: 20px;
        font-family: "PingFang";
        color: #bfebff;
      }
    }
  }
}
</style>
