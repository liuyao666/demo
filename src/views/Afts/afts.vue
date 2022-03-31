<template>
  <div class="wrapper">
    <Header />
    <Left>
      <template #top>
        <Afsjtj />
      </template>
      <template #center>
        <Afsjclzt />
      </template>
      <template #bottom>
        <AfsjTable />
      </template>
    </Left>
    <Right>
      <template #top>
        <Afry />
      </template>
      <template #bottom>
        <Sbtj />
        <Sbztjc />
      </template>
    </Right>
  </div>
</template>

<script>
import Header from "@/components/Layouts/header/index.vue";
import Left from "@/components/Layouts/common/left.vue";
import Right from "@/components/Layouts/common/right.vue";
import Afsjtj from "./components/afsjtj.vue";
import Afsjclzt from "./components/afsjclzt.vue";
import AfsjTable from "./components/afsjTable.vue";
import Sbztjc from "./components/sbztjc.vue";
import Sbtj from "./components/sbtj.vue";
import Afry from "./components/afry.vue";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    Left,
    Right,
    Afsjtj,
    Afsjclzt,
    AfsjTable,
    Sbztjc,
    Sbtj,
    Afry,
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log("888", this.$store.state.anfang.arr);
  },
  watch: {},
  computed: {
    ...mapState(["arr"]),
  },
  methods: {},
};
</script>
<style  scoped>
.wrapper {
}
</style>