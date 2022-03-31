<template>
  <div class="sjcl">
    <div class="title">
      <img src="@/assets/image/school/right.png" />
      <p>告警事件类型</p>
    </div>
    <div class="anfang_content">
      <ChartPie
        class="pie_chart"
        width="160px"
        height="160px"
        legthunit="个"
        :rowData="gjsjData"
        :legend_position="'relative'"
        :legend_left="'-6px'"
        :legend_top="'-12px'"
        :color="['#00BFFF', '#FFE426', '#00DD8A', '#00DD8A']"
        :loop_labelStyle="{
          left: '11%',
          top: '34%',
        }"
        :legendsStyle="{
          display: 'block',
          right: '16px',
          unitright: '-3px',
        }"
      />
    </div>
  </div>
</template>

<script>
import { getAfsjChartData } from "@/api/index.js";
import ChartPie from "@/components/Echarts/ChartPie.vue";
export default {
  components: {
    ChartPie,
  },
  props: {},
  data() {
    return {
      gjsjData: [],
    };
  },
  created() {},
  mounted() {
    this.getChartData();
  },
  watch: {},
  computed: {},
  methods: {
    async getChartData() {
      await getAfsjChartData().then((res) => {
        this.gjsjData = res.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.sjcl {
  width: 300px;
  height: 84px;
  position: absolute;
  left: 5%;
  top: 15%;
  .title {
    display: flex;
    color: #fff;
    text-shadow: black 1px 1px 1px;
    font-size: 14px;
    font-family: aa;
    img {
      padding-top: 4px;
    }
    p {
      padding-left: 10px;
    }
  }
}
</style>