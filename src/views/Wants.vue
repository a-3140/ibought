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

export default {
  name: "Wants",
  components: { ECard },
  data() {
    return {
      wantList: [
        {
          id: 1,
          name: "Macbook Air 13 M1 - 256GB",
          shopName: "Shopee",
          price: 20000,
          dateAdded: new Date(2021, 10, 17), // 2 days ago
          daysToDelay: 8,
        },
        {
          id: 2,
          name: "Logitech MX Master 3",
          shopName: "Lazada",
          price: 5000,
          dateAdded: new Date(2021, 10, 19),
          daysToDelay: 4,
        },
      ],
    };
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