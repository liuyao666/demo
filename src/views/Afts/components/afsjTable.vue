<template>
  <div class="afsj_table">
    <TitleLfet :title="'安防事件列表'" />
    <div class="anfang_table">
      <div class="t_header">
        <span>告警时间</span>
        <span>告警位置</span>
        <span>告警类型</span>
      </div>
      <div class="t_body">
        <ul>
          <li v-for="(item, index) in gaojingTableData" :key="index">
            <span>{{ item.time }}</span>
            <span>{{ item.value }}</span>
            <span>{{ item.type }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getAfgjtableData } from "@/api/index.js";
import TitleLfet from "@/components/Layouts/common/TitleLfet.vue";
export default {
  components: {
    TitleLfet,
  },
  props: {},
  data() {
    return {
      gaojingTableData: [],
    };
  },
  created() {
    this.getAfgjData();
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    async getAfgjData() {
      await getAfgjtableData().then((res) => {
        this.gaojingTableData = res.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.afsj_table {
  width: 300px;
  height: 180px;
  position: absolute;
  left: 5%;
  bottom: 0;
  //   .title {
  //     display: flex;
  //     color: #fff;
  //     text-shadow: black 1px 1px 1px;
  //     font-size: 14px;
  //     font-family: aa;
  //     img {
  //       padding-top: 4px;
  //     }
  //     p {
  //       padding-left: 10px;
  //     }
  //   }
  .anfang_table {
    width: 100%;
    height: 154px;
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
      width: 40%;
      padding-left: 5px;
      box-sizing: border-box;
    }
    .t_header span:nth-child(2) {
      display: block;
      flex: 1;
      padding-left: 5px;
      box-sizing: border-box;
    }
    .t_header span:nth-child(3) {
      display: block;
      width: 25%;
      padding-left: 5px;
      box-sizing: border-box;
    }
    .t_body li {
      width: 100%;
      height: 30px;
      color: #fff;
      line-height: 30px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      border-bottom: 1px solid #3b4552;
    }
    .t_body li span:nth-child(1) {
      display: block;
      width: 40%;
    }
    .t_body li span:nth-child(2) {
      display: block;
      flex: 1;
    }
    .t_body li span:nth-child(3) {
      display: block;
      width: 25%;
    }
  }
}
</style>