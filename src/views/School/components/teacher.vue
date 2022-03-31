<template>
  <div class="teacher" @click="test">
    <img src="@/assets/image/school/师生统计.png" />
    <div class="teacher_content">
      <div class="t_c_div" v-for="item in teacherData" :key="item.num">
        <span class="num">{{ item.num }}</span>
        <span class="unit">{{ item.unit }}</span>
        <span class="title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import store from "../../../store/store.js";
import { mapState, mapMutations } from "vuex";
import { getStudent } from "@/api/index.js";
export default {
  name: "teacher",
  components: {},
  props: {},
  data() {
    return {
      teacherData: [],
    };
  },
  created() {},
  mounted() {
    this.getgetStudentData();
  },
  watch: {},
  computed: {
    ...mapState(["highLight"]),
  },
  methods: {
    ...mapMutations(["setHighLight"]),
    async getgetStudentData() {
      await getStudent().then((res) => {
        this.teacherData = res.data;
      });
    },
    test() {
      this.$store.commit("setHighLight", "师生统计");
    },
  },
};
</script>
<style lang="scss" scoped>
.teacher {
  width: 300px;
  height: 260px;
  position: absolute;
  left: 5%;
  top: 2%;
  .teacher_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 230px;
    .t_c_div {
      position: relative;
      width: 146px;
      height: 124px;
      background: url("../../../assets/image/school/数字仪表盘背景.png");
      .num {
        position: absolute;
        left: 39%;
        top: 20%;
        font-size: 24px;
        color: #00ffff;
        font-family: Regular;
        text-shadow: #21656b 1px 1px 1px;
      }
      .unit {
        position: absolute;
        left: 43%;
        top: 41%;
        color: #fff;
        text-shadow: black 1px 1px 1px;
      }
      .title {
        position: absolute;
        left: 24%;
        top: 60%;
        color: #fff;
        text-shadow: black 1px 1px 1px;
        font-size: 14px;
        font-family: aa;
      }
    }
  }
}
</style>