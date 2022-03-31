<template>
  <div class="taishi">
    <img src="@/assets/image/bxtx/人员态势.png" />
    <div class="taishi_content">
      <div class="renshu">
        <span>当前校内人数</span>
        <span>265151</span>
        <span>人</span>
      </div>
      <ChartPie2 />
    </div>
  </div>
</template>

<script>
import { getNenghao } from "@/api/index.js";
import ChartPie2 from "@/components/Echarts/ChartPie2.vue";

export default {
  name: "taishi",
  components: {
    ChartPie2,
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
    .renshu {
      width: 100%;
      height: 40px;
      background: url("../../../assets/image/bxtx/当前校内人数背景.png")
        no-repeat;
      position: relative;
      & span:first-child {
        color: #fff;
        position: absolute;
        top: 18%;
        left: 20%;
      }
      & span:nth-child(2) {
        color: #fff;
        position: absolute;
        top: 24%;
        left: 70%;
        color: #fff;
        font-size: 24px;
        font-family: Regular;
        text-shadow: #21656b 1px 1px 1px;
      }
      & span:nth-child(3) {
        position: absolute;
        top: 30%;
        left: 90%;
        color: #71bbf0;
        text-shadow: #21656b 1px 1px 1px;
      }
    }
  }
}
</style>