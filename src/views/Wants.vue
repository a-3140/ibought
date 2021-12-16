<template>
  <div>
    <div class="content">
      <div class="all-cards-container">
        <e-card v-for="item in wantList" :key="item.id" v-bind="item" />
      </div>
    </div>
    <e-btn @btn-function="toggleDrawer" v-bind="button" />
    <el-drawer
      :visible.sync="drawer"
      :direction="drawerOptions.direction"
      :destroy-on-close="drawerOptions.destroyOnClose"
      :size="drawerOptions.size"
    >
      <template slot="title">
        <div class="form-title">
          {{ $t("wantForm.title") }}
        </div>
      </template>
      <slot>
        <add-want-form />
      </slot>
    </el-drawer>
  </div>
</template>

<script>
import ECard from "../components/ECard.vue";
import { WANT_QUERY } from "../graphql/queries";
import AddWantForm from "../components/Forms/AddWant.vue";
import EBtn from "../components/Buttons/EBtn.vue";

export default {
  name: "Wants",
  components: { ECard, AddWantForm, EBtn },
  data() {
    return {
      drawer: false,
      drawerOptions: {
        destroyOnClose: true,
        direction: "rtl",
        size: "100%",
      },

      button: {
        type: "info",
        icon: "el-icon-circle-plus",
        text: "I want",
      },
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
    wantList: {
      query: WANT_QUERY,
      update: (data) => data.getAllWantsByUserId,
      variables: {
        // hard coded test user
        id: "39be5968-415c-45c3-827c-64e9499d41ec",
      },
    },
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
.form-title {
  text-align: left;
  font-weight: bold;
  font-size: 1.25em;
  color: #000000;
}
.content {
  text-align: left;
  background: #e4e4e6;
  z-index: -999;
  min-height: calc(100vh - 120px);
  padding-top: 0.5em;
  padding-bottom: 5em;
  margin-top: 60px;
}
.title {
  font-size: 1.5em;
  font-weight: normal;
  padding-left: 1em;
  margin-bottom: 0;
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