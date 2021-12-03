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
      wantList: [
        {
          id: 1,
          name: "Macbook sample",
          shopName: "Shopee",
          price: 20000,
          dateAdded: "2021-12-01",
          daysToDelay: 8,
        },
      ],
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
  text-align: left;
  background: #e4e4e6;
  z-index: -999;
  min-height: calc(100vh - 120px);
  padding-top: .5em;
  padding-bottom: 5em;
  margin-top: 60px;
}
.title {
  font-size: 1.5em;
  font-weight: normal;
  padding-left: 1em;;
  margin-bottom: 0;
}
.all-cards-container {
  margin: 1.5em;
  margin-top: 1em;
  padding: 1em;
  padding-top: .1em;
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