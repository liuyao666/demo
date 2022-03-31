<template>
  <div class="anfang">
    <img src="@/assets/image/school/安防告警统计.png" />
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
        :rowData="afgjData"
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
    <div class="title two">
      <img src="@/assets/image/school/right.png" />
      <p>告警事件列表</p>
    </div>
    <div class="anfang_table">
      <div class="t_header">
        <span>类型</span>
        <span>时间</span>
        <span>位置</span>
      </div>
      <div class="t_body">
        <ul>
          <li v-for="(item, index) in gaojingData" :key="index">
            <span>{{ item.type }}</span>
            <span>{{ item.time }}</span>
            <span>{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getAfgj, getGaojing } from "@/api/index.js";
import ChartPie from "@/components/Echarts/ChartPie.vue";
export default {
  name: "anfang",
  components: {
    ChartPie,
  },
  props: {},
  data() {
    return {
      afgjData: [],
      gaojingData: [],
    };
  },
  created() {},
  mounted() {
    this.getAfgjData();
    this.getGaojingData();
  },
  watch: {},
  computed: {},
  methods: {
    async getAfgjData() {
      await getAfgj().then((res) => {
        this.afgjData = res.data;
      });
    },
    async getGaojingData() {
      await getGaojing().then((res) => {
        this.gaojingData = res.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.anfang {
  width: 300px;
  height: 362px;
  position: absolute;
  left: 5%;
  top: 50%;
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
  .two {
    position: absolute;
    top: 64%;
  }

  .anfang_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 150px;
  }
  .anfang_table {
    position: absolute;
    top: 72%;
    width: 100%;
    height: 94px;
    .t_header {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      background-color: #223153;
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
</style>