<template>
  <div class="box-container">
    <div class="box-item">
      <p class="box-item-name">{{ name }}</p>
      <p class="box-item-store">
        <b>{{ shopName }}</b>
      </p>
      <p class="box-item-note">
        {{ getDaysLeft(dateAdded, daysToDelay) }} Days Left
      </p>
    </div>
    <div class="box-item-price">
      <div>{{ formatNumberToPrice(price) }} {{ currency }}</div>
      <div>
        <el-progress
          type="circle"
          :show-text=false
          :color="getStatus(dateAdded, daysToDelay)"
          :width="26"
          :percentage="computeProgressPercentage(dateAdded, daysToDelay)"
        ></el-progress>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  data() {
    return {
      currency: "PHP",
    };
  },
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    shopName: {
      type: String,
      required: true,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      default: 0.0,
    },
    daysToDelay: {
      type: Number,
      required: true,
      default: 0,
    },
    dateAdded: {
      type: Date,
      required: true,
      default: Date(),
    },
  },
  methods: {
    // getStatus(date_added: Date, days_to_delay: number): string {
    //   return this.getDaysLeft(date_added, days_to_delay) === 0 ? '#6f7ad3' : '#f56c6c';
    // },
    getStatus(date_added: Date, days_to_delay: number): string {
      console.log(this.getDaysLeft(date_added, days_to_delay) === 0 ? '#6f7ad3' : '#f56c6c');
      return '#6f7ad3';
    },
    getNumberOfDays(date1: Date, date2: Date): number {
      const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
      const diffInTime = date2.getTime() - date1.getTime();
      const diffInDays = Math.round(diffInTime / oneDayInMilliseconds);

      return diffInDays;
    },

    getPercentage(progress: number, goal: number): number {
      return Math.abs((progress / goal) * 100);
    },

    getDifferenceOfDays(date_added: Date): number {
      const today = new Date() as Date;
      return this.getNumberOfDays(date_added, today);
    },

    getDaysLeft(date_added: Date, days_to_delay: number): number {
      const difference = this.getDifferenceOfDays(date_added);
      return days_to_delay - difference;
    },

    computeProgressPercentage(date_added: Date, days_to_delay: number): number {
      const difference = this.getDifferenceOfDays(date_added);
      const progress = difference - days_to_delay;
      console.log(this.getPercentage(progress, days_to_delay));
      return this.getPercentage(progress, days_to_delay);
    },

    formatNumberToPrice(num: number): string {
      return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
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