<template>
  <div class="aftstj">
    <img src="@/assets/image/afts/安防事件监测.png" />
    <div class="aftstj_content">
      <div class="a_c_div" v-for="item in aftstjData" :key="item.num">
        <span class="title">{{ item.title }}</span>
        <span class="num">{{ item.num }}</span>
        <span class="unit">{{ item.unit }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getAfsj } from "@/api/index.js";
export default {
  name: "aftstj",
  components: {},
  props: {},
  data() {
    return {
      aftstjData: [],
    };
  },
  created() {},
  mounted() {
    this.getAllAfsjData();
  },
  watch: {},
  computed: {},
  methods: {
    async getAllAfsjData() {
      await getAfsj().then((res) => {
        this.aftstjData = res.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.aftstj {
  width: 300px;
  height: 84px;
  position: absolute;
  left: 5%;
  top: 2%;
  .aftstj_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    .a_c_div {
      position: relative;
      width: 100%;
      height: 50px;
      background: url("../../../assets/image/afts/安防事件监测背景.png")
        no-repeat;
      .title {
        color: #fff;
        position: absolute;
        top: 16%;
        left: 23%;
      }
      .num {
        position: absolute;
        right: 53px;
        top: 7px;
        font-size: 24px;
        color: #fff;
        text-shadow: #21656b 1px 1px 1px;
        font-family: Regular;
      }
      .unit {
        position: absolute;
        top: 10px;
        right: 20px;
        line-height: 22px;
        font-size: 16px;
        color: #00b9f7;
        font-family: "微软雅黑";
      }
    }
  }
}
</style>