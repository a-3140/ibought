<template>
  <div class="box-container">
    <div class="box-item">
      <p class="box-item-name">{{ name }}</p>
      <!-- name -->
      <p class="box-item-store"><b>Shopee</b></p>
      <!-- shop -->
      <p class="box-item-note">3 Days left</p>
      <!-- date-added: compute this from the item.days_to_delay -->
    </div>
    <div class="box-item-price">
      <div>20,000 PHP</div>
      <!-- price -->
      <div>
        <el-progress
          width="26"
          type="circle"
          :percentage="50"
          status="exception"
        ></el-progress>
        <!-- this should be computed -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    }
  }
};
</script>


<style scoped>
.box-container {
  margin-right: 0;
  border-bottom: 1px solid #c0c4cc;
  text-align: left;
  padding: 2em 1em;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.box-container:hover {
  background: #ccc;
}
.box-item-name {
  margin: 0;
}
.box-item-store {
  margin: 0;
  margin-top: 4px;
}
.box-item-note {
  color: #909399;
  margin: 0;
  margin-top: 4px;
}
.box-item-price {
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  font-weight: bold;
}
.el-progress {
  padding: 16px;
}
</style>