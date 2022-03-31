<template>
  <div class="center" :style="{ width: `${width}`, height: `${height}` }">
    <slot name="top">
      <CenterTable />
    </slot>
  </div>
</template>

<script>
import CenterTable from "../../../../src/views/School/components/centerTable.vue";
export default {
  components: {
    CenterTable,
  },
  props: {
    width: {
      type: String,
      default: "340px",
    },
    height: {
      type: String,
      default: "780px",
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #667c88;
  background-color: #223151;
}
</style>