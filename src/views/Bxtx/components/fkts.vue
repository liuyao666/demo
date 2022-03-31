<template>
  <div class="taishi">
    <img src="@/assets/image/bxtx/访客态势.png" />
    <div class="taishi_content">
      <Liquidfill :width="'100px'" :height="'100px'" />
      <span class="name">访客预约率</span>
      <img src="../../../assets/image/school/设施态势-故障率托盘.png" />
      <div class="right">
        <p>总访客数</p>
        <span class="num">332</span>
        <span class="unit">人</span>
        <p>已到访客</p>
        <span class="num">278</span>
        <span class="unit">人</span>
      </div>
    </div>
    <Fktschart />
  </div>
</template>

<script>
import { getNenghao } from "@/api/index.js";
import Liquidfill from "@/components/Echarts/Liquidfill.vue";
import Fktschart from "./fkts_chart.vue";
export default {
  name: "taishi",
  components: {
    Liquidfill,
    Fktschart,
  },
  props: {},
  data() {
    return {
      nenghaoData: [],
    };
  },
  created() {},
  mounted() {
    this.getNenghaoData();
  },
  watch: {},
  computed: {},
  methods: {
    async getNenghaoData() {
      await getNenghao().then((res) => {
        this.nenghaoData = res.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.taishi {
  width: 300px;
  height: 130px;
  position: absolute;
  left: 5%;
  top: 2%;
  .taishi_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    .name {
      position: absolute;
      left: 9%;
      bottom: -22%;
      color: #fff;
      text-shadow: black 1px 1px 1px;
      font-size: 18px;
      font-family: aa;
    }
    img {
      position: absolute;
      left: 0%;
      top: 102%;
    }
    .right {
      width: 160px;
      height: 140px;
      background: url("../../../assets/image/bxtx/访客态势-总访客和已到访客.png");
      p {
        color: #fff;
        margin-left: 50%;
        margin-top: 12%;
      }
      .num {
        color: #4cffa5;
        font-size: 24px;
        font-family: Regular;
        text-shadow: #21656b 1px 1px 1px;
        margin-left: 54%;
      }
      .unit {
        font-size: 14px;
        color: #fff;
        margin-top: 2%;
        position: absolute;
        right: 10px;
      }
    }
  }
}
</style>