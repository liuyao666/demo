<template>
  <div class="title_left">
    <div class="title">
      <img src="@/assets/image/school/right.png" />
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
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
.title_left {
  .title {
    display: flex;
    color: #fff;
    text-shadow: black 1px 1px 1px;
    font-size: 14px;
    font-family: aa;
    img {
      padding-top: 4px;
    }
    p {
      padding-left: 10px;
    }
  }
}
</style>