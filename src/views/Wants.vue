<template>
  <div>
    <mobile-top-nav />
    <e-card v-for="item in wantList" :key="item.id" v-bind="item" />
  </div>
</template>

<script>
import ECard from "../components/ECard.vue";
import MobileTopNav from "../components/layout-default/MobileTopNav.vue"
import { WANT_QUERY } from "../graphql";

export default {
  name: "Wants",
  components: { ECard, MobileTopNav },
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