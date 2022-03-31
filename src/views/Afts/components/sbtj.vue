<template>
  <div class="sbtj">
    <img src="@/assets/image/afts/安防设备监测.png" />
    <TitleLfet :title="'设备统计'" />
    <div class="sb_cont">
      <div class="sb_cont_item" v-for="item in afsbData" :key="item.val">
        <span class="name">{{ item.name }}</span>
        <span class="unit">{{ item.unit }}</span>
        <span class="val">{{ item.val }}</span>
        <img src="../../../assets/image/afts/安防设备监测托盘.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { getAfsbData } from "@/api/index.js";
import TitleLfet from "@/components/Layouts/common/TitleLfet.vue";
export default {
  components: {
    TitleLfet,
  },
  props: {},
  data() {
    return {
      afsbData: [],
    };
  },
  created() {},
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {},
  methods: {
    async getData() {
      await getAfsbData().then((res) => {
        this.afsbData = res.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.sbtj {
  width: 300px;
  height: 250px;
  position: absolute;
  left: 5%;
  bottom: 28%;
  .sb_cont {
    width: 100%;
    height: 178px;
    margin-top: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .sb_cont_item {
      width: 94px;
      height: 85px;
      position: relative;
      .name {
        display: block;
        width: 100%;
        text-align: center;
        color: #fff;
      }
      .unit {
        position: absolute;
        top: 26%;
        left: 44%;
        font-size: 16px;
        color: #00b9f7;
        font-family: "微软雅黑";
      }
      .val {
        position: absolute;
        left: 44%;
        top: 53%;
        color: #f8f8f8;
        font-size: 24px;
        font-family: Regular;
        text-align: center;
      }
      img {
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
}
</style>