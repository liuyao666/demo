<template>
  <div class="wrapper">
    <Header />
    <Left>
      <template #top>
        <Ryts />
      </template>
    </Left>
    <Right>
      <template #top>
        <Fkts />
      </template>
      <template #bottom>
        <Tongxingsheshi />
      </template>
    </Right>
  </div>
</template>

<script>
import Header from "@/components/Layouts/header/index.vue";
import Left from "@/components/Layouts/common/left.vue";
import Right from "@/components/Layouts/common/right.vue";
import Fkts from "./components/fkts.vue";
import Tongxingsheshi from "./components/tongxingsheshi.vue";
import Ryts from "./components/ryts.vue";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    Left,
    Right,
    Fkts,
    Tongxingsheshi,
    Ryts,
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log("888", this.$store.state.tongxing.arr);
  },
  watch: {},
  computed: {
    ...mapState(["arr"]),
  },
  methods: {},
};
</script>
<style scoped>
.wrapper {
}
</style>