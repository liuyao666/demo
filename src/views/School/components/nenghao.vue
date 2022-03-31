<template>
  <div class="nenghao" @click="test">
    <button @click="add">修改</button>
    <button @click="add2">修改2</button>
    <img src="@/assets/image/school/能耗统计.png" />
    <div class="nenghao_content">
      <div class="n_c_div" v-for="item in nenghaoData" :key="item.value">
        <span class="name">{{ item.name }}</span>
        <span class="value">{{ item.value }}</span>
        <span class="unit">{{ item.unit }}</span>
        <span class="value2">{{ item.value2 }}</span>
        <span class="value3">{{ item.value3 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { getNenghao } from "@/api/index.js";
export default {
  name: "nenghao",
  components: {},
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
  computed: {
    ...mapState(["highLight", "arr"]),
  },
  methods: {
    ...mapMutations(["setHighLight", "changeArr"]),
    ...mapActions(["editArr"]),

    async getNenghaoData() {
      await getNenghao().then((res) => {
        this.nenghaoData = res.data;
      });
    },
    test() {
      this.$store.commit("setHighLight", "能耗统计");
    },

    add() {
      // commit同步操作mutations
      this.$store.commit("changeArr", 5);
      console.log(this.$store.state.school.arr);
    },

    add2() {
      this.$store.dispatch("editArr", 5);
      //提交异步actions
      // this.editArr(5);
      console.log(this.$store.state.school.arr);
    },
  },
};
</script>
<style lang="scss" scoped>
.nenghao {
  width: 300px;
  height: 130px;
  position: absolute;
  left: 5%;
  top: 2%;
  .nenghao_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 90px;
    .n_c_div {
      position: relative;
      width: 100%;
      height: 40px;
      background: url("../../../assets/image/school/能耗统计背景.png");
      .name {
        position: absolute;
        left: 10%;
        top: 22%;
        color: #fff;
        text-shadow: black 1px 1px 1px;
      }
      .value {
        position: absolute;
        left: 34%;
        top: 20%;
        font-size: 24px;
        color: #fff;
        font-family: Regular;
        text-shadow: #21656b 1px 1px 1px;
      }
      .unit {
        position: absolute;
        left: 46%;
        top: 39%;
        font-size: 14px;
        color: #69b0e3;
        font-family: Regular;
        text-shadow: #21656b 1px 1px 1px;
      }
      .value2 {
        position: absolute;
        left: 64%;
        top: 42%;
        font-size: 14px;
        color: #00d8a3;
        font-family: Regular;
        text-shadow: #21656b 1px 1px 1px;
      }
      .value3 {
        position: absolute;
        left: 89%;
        top: 40%;
        font-size: 14px;
        color: #00d8a3;
        font-family: Regular;
        text-shadow: #21656b 1px 1px 1px;
      }
    }
  }
}
</style>