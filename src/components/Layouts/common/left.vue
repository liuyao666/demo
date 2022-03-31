<template>
  <div class="left" :style="{ width: `${width}`, height: `${height}` }">
    <slot name="top"></slot>
    <slot name="center"></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  components: {},
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
.left {
  position: absolute;
  left: 30px;
  top: 170px;
  border: 1px solid #667c88;
  background: url("../../../assets/image/school/背景.png") no-repeat;
  background-size: inherit;
  background-position: 51% 57%;
}
</style>