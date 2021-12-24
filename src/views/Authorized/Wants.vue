<template>
  <div>
    <div class="content">
      <div class="all-cards-container">
        <!-- TODO loading card -->
        <el-skeleton
          v-if="$apollo.loading"
          class="skeleton"
          :rows="3"
          animated
        />
        <e-card v-else v-for="item in wantList" :key="item.id" v-bind="item" />
      </div>
    </div>
    <e-btn @btn-function="addWant(addWantDrawerState)" v-bind="button" />
  </div>
</template>

<script>
import ECard from "@/components/ECard.vue";
import { ME, WANT_QUERY } from "@/graphql/queries";
import EBtn from "@/components/Buttons/EBtn.vue";
import { mapActions } from "vuex";
import { addWantDrawerInitialState } from "@/constants";

export default {
  name: "Wants",
  components: { ECard, EBtn },
  data() {
    return {
      addWantDrawerState: {
        ...addWantDrawerInitialState,
      },
      button: {
        type: "info",
        icon: "el-icon-circle-plus",
        text: "I want",
      },
      user: {},
    };
  },
  apollo: {
    wantList: {
      skip: true,
      query: WANT_QUERY,
      update: (data) => data.getAllWantsByUserId,
      variables: {
        id: "",
      },
    },
    currentUserId: {
      query: ME,
      update: (data) => {
        data.ME;
      },
      result(result) {
        this.$apollo.queries.wantList.setVariables({
          id: result.data.ME,
        });
        this.$apollo.queries.wantList.skip = false;
      },
    },
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
.skeleton {
  padding-top: 1em;
}
</style>