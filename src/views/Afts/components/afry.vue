<template>
  <div class="afry">
    <img src="@/assets/image/afts/安防值班人员.png" />
    <div class="afry_content">
      <img src="../../../assets/image/afts/1.png" />
    </div>
  </div>
</template>

<script>
import { getStudent } from "@/api/index.js";
export default {
  name: "afry",
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
  computed: {},
  methods: {
    async getgetStudentData() {
      await getStudent().then((res) => {
        this.teacherData = res.data;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.afry {
  width: 300px;
  height: 260px;
  position: absolute;
  left: 5%;
  top: 2%;
  .afry_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 230px;
  }
}
</style>