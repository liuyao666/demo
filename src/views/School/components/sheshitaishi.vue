<template>
  <div class="taishi">
    <img src="@/assets/image/school/设施态势.png" />
    <div class="taishi_content">
      <Liquidfill :width="'100px'" :height="'100px'" />
      <img src="../../../assets/image/school/设施态势-故障率托盘.png" />
      <div class="right">
        <p>设备总数</p>
        <span class="num">4461</span>
        <span class="unit">个</span>
        <p>设备故障数</p>
        <span class="num">602</span>
        <span class="unit">个</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getNenghao } from "@/api/index.js";
import Liquidfill from "@/components/Echarts/Liquidfill.vue";
export default {
  name: "taishi",
  components: {
    Liquidfill,
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
  top: 19%;
  .taishi_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    img {
      position: absolute;
      left: 0%;
      top: 102%;
    }
    .right {
      width: 160px;
      height: 140px;
      background: url("../../../assets/image/school/设施态势-总数和故障.png");
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