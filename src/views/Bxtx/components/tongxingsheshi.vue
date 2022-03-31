<template>
  <div class="taishi">
    <img src="@/assets/image/bxtx/通行设施统计.png" />
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
    <div class="taishi_content">
      <img src="../../../assets/image/bxtx/通行设施统计背景.png" alt="" />
      <div class="c_div" v-for="item in dataArr" :key="item.val">
        <span class="val">{{ item.val }}</span>
        <span>{{ item.unit }}</span>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gettxssData } from "@/api/index.js";
export default {
  name: "taishi",
  components: {},
  props: {},
  data() {
    return {
      nenghaoData: [],
      sindex: 0,
      tab_span_act: "tab_span_act",
      tab_span: "tab_span",
      chact: [
        { name: "行人", id: "xingrendata" },
        { name: "车辆", id: "cheliangdata" },
        { name: "门禁", id: "menjindata" },
      ],
      data: {},
      dataArr: [],
    };
  },
  created() {},
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {},
  methods: {
    ChactTab(index, item) {
      this.sindex = index;
      this.dataArr = this.data[item.id];
    },
    async getData() {
      await gettxssData().then((res) => {
        this.data = res.data;
        this.dataArr = res.data.xingrendata;
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
  bottom: 25%;
  .chact {
    display: flex;
    position: absolute;
    right: 5%;
    top: 4px;
  }
  .taishi_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 170px;
    .c_div {
      position: relative;
      //   .val {
      //     // position: absolute;
      //     // left: 39%;
      //     // top: 20%;
      //     font-size: 24px;
      //     color: #00ffff;
      //     font-family: Regular;
      //     text-shadow: #21656b 1px 1px 1px;
      //   }
    }
  }
}
.tab_span_act {
  display: block;
  cursor: pointer;
  color: #97dfff;
  width: 45px;
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
  width: 45px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
</style>