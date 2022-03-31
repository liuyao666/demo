<template>
  <div class="wrapper">
    <Header />
    <Left>
      <template #top>
        <HighLight val="师生统计" :css="{ height: '300px' }" />
        <Teacher />
      </template>
      <template #center>
        <Inschool />
      </template>
      <template #bottom>
        <Peoplecar />
      </template>
    </Left>
    <Center :width="'500px'" :height="'300px'">
      <template #top> </template>
    </Center>
    <Right>
      <template #top>
        <HighLight val="能源统计" :css="{ height: '130px' }" />
        <Nenghao />
      </template>
      <template #center>
        <Sheshitaishi />
      </template>
      <template #bottom>
        <Anfanggaojing />
      </template>
    </Right>
  </div>
</template>

<script>
import Header from "@/components/Layouts/header/index.vue";
import Left from "@/components/Layouts/common/left.vue";
import Teacher from "./components/teacher.vue";
import Inschool from "./components/inschool.vue";
import Peoplecar from "./components/proplecar.vue";
import Right from "@/components/Layouts/common/right.vue";
import Nenghao from "./components/nenghao.vue";
import Sheshitaishi from "./components/sheshitaishi.vue";
import Anfanggaojing from "./components/anfanggaojing.vue";
import HighLight from "@/components/Layouts/common/HighLight.vue";

import { mapState, mapGetters } from "vuex";
import Center from "../../components/Layouts/common/center.vue";
export default {
  components: {
    Header,
    Left,
    Teacher,
    Inschool,
    Peoplecar,
    Right,
    Nenghao,
    Sheshitaishi,
    Anfanggaojing,
    HighLight,
    Center,
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    // console.log("888", this.$store.state.school.arr);
    console.log(this.arr);
    // console.log(new Date(2022, 3, 0).getDate());
  },
  watch: {},
  computed: {
    ...mapState(["arr"]),
    ...mapGetters(["arr"]),
  },
  methods: {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>