<template>
  <div>
    <div class="content">
      <div class="all-cards-container">
        <e-card v-for="item in wantList" :key="item.id" v-bind="item" />
      </div>
      <h1>{{ user }}</h1>
    </div>
    <e-btn @btn-function="addWant(addWantDrawerState)" v-bind="button" />
  </div>
</template>

<script>
import ECard from "../components/ECard.vue";
import { ME } from "../graphql/queries";
import EBtn from "../components/Buttons/EBtn.vue";
import { mapActions } from "vuex";

export default {
  name: "Wants",
  components: { ECard, EBtn },
  data() {
    return {
      addWantDrawerState: {
        title: "add want",
        showDrawer: true,
        component: "AddWant",
        direction: "rtl",
        destroyOnClose: true,
      },
      button: {
        type: "info",
        icon: "el-icon-circle-plus",
        text: "I want",
      },
      user: {},
      wantList: [
        {
          id: 1,
          name: "Sample Item",
          source: "Shopee",
          price: 20000,
          dateAdded: "2021-12-01",
          daysToDelay: 8,
        },
      ],
    };
  },
  apollo: {
    user: {
      query: ME,
      update: (data) => data.ME,
    },
    // wantList: {
    //   query: WANT_QUERY,
    //   update: (data) => data.getAllWantsByUserId,
    //   variables: {
    //     // hard coded test user
    //     id: "39be5968-415c-45c3-827c-64e9499d41ec",
    //   },
    // },
  },
  methods: {
    ...mapActions(["toggleDrawer"]),
    addWant(state) {
      this.toggleDrawer(state);
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
  padding-top: 0.5em;
  padding-bottom: 5em;
  margin-top: 60px;
}

.all-cards-container {
  margin: 1.5em;
  margin-top: 1em;
  padding: 1em;
  padding-top: 0.1em;
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