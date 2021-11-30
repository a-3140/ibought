<template>
  <div>
    <div class="box">
      <h1>Wants</h1>
      <p class="text-info">Arvin Mark Atienza</p>
    </div>
    <e-card v-for="item in wantList" :key="item.id" v-bind="item" />
  </div>
</template>

<script>
import ECard from "../components/ECard.vue";
import { WANT_QUERY } from "../graphql";

export default {
  name: "Wants",
  components: { ECard },
  data() {
    return {
      wantList: [],
    };
  },
  apollo: {
    wantList: {
      query: WANT_QUERY,
      update: (data) => data.wants,
    },
  },
};
</script>

<style scoped>
.text-info {
  color: #909399;
  margin-top: -16px;
  margin-bottom: 24px;
}
.box {
  border-bottom: 1px solid #c0c4cc;
}
</style>