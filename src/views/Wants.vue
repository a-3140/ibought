<template>
  <div>
    <mobile-top-nav />
    <div class="content">
      <div class="all-cards-container">
        <e-card v-for="item in wantList" :key="item.id" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ECard from "../components/ECard.vue";
import MobileTopNav from "../components/layout-default/MobileTopNav.vue";
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
.content {
  border-top-left-radius: 1.5em;
  border-top-right-radius: 1.5em;
  background: #e4e4e6;
  z-index: -999;
  padding-top: 2em;
  min-height: 100vh;
}
.all-cards-container {
  margin: 1.5em;
  padding: 1em;
  border-radius: 1em;
  background: #ffffff;
}
.text-info {
  color: #909399;
  margin-top: -16px;
  margin-bottom: 24px;
}
.box {
  border-bottom: 1px solid #c0c4cc;
}
</style>