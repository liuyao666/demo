<template>
  <div class="peoplecar">
    <img src="@/assets/image/school/出入校数量趋势.png" />
    <div class="chact">
      <span
        :class="[index == sindex ? 'tab_span_act' : 'tab_span']"
        v-for="(item, index) in chact"
        :key="index"
        @click="ChactTab(index, item)"
      >
        {{ item.name }}
      </span>
    </div>
    <div>
      <ChartLineArea
        width="297px"
        height="168px"
        :rowData="rowData"
        :symbolSize="6"
        :barColor="[
          '#1CAEDE',
          'rgba(30,181,231,0)',
          '#1180EE',
          'rgba(17,127,236,0)',
        ]"
        unit="万人"
        :legIsShow="true"
        :fontStyle="{
          Xfont: {
            color: '#BFEBFF',
            fontSize: 12,
            fontFamily: 'Adobe 黑体 Std',
          },
          Yfont: {
            color: '#BFEBFF',
            fontSize: 12,
            fontFamily: 'Helvetica',
          },
          nameTextStyle: {
            color: '#BFEBFF',
            fontSize: 12,
            padding: 2,
            fontFamily: '微软雅黑',
          },
        }"
      />
    </div>
  </div>
</template>

<script>
import ChartLineArea from "@/components/Echarts/ChartLineArea.vue";
import { getStudentTeacher } from "@/api/index.js";
export default {
  name: "peoplecar",
  components: {
    ChartLineArea,
  },
  props: {},
  data() {
    return {
      sindex: 0,
      tab_span_act: "tab_span_act",
      tab_span: "tab_span",
      chact: [
        { name: "人员", id: "peopledata" },
        { name: "车辆", id: "cardata" },
      ],
      rowData: [],
    };
  },
  created() {},
  mounted() {
    this.getIdData("peopledata");
  },
  watch: {},
  computed: {},
  methods: {
    ChactTab(index, item) {
      this.sindex = index;
      this.getIdData(item.id);
    },
    async getIdData(params) {
      await getStudentTeacher(params).then((res) => {
        this.rowData = res.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.peoplecar {
  width: 300px;
  height: 260px;
  position: absolute;
  left: 5%;
  top: 70%;
  .chact {
    display: flex;
    position: absolute;
    right: 5%;
    top: 4px;
  }
}
.tab_span_act {
  display: block;
  cursor: pointer;
  color: #97dfff;
  width: 72px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: url("../../../assets/image/school/一级标题选中态.png") no-repeat;
  background-size: 100% 92%;
}
.tab_span {
  display: block;
  cursor: pointer;
  color: #fff;
  //   font-size: 20px;
  //   font-weight: bold;
  width: 72px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
</style>