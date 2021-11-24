<template>
  <div class="box-container">
    <div class="box-item">
      <p class="box-item-name">{{ name }}</p>
      <p class="box-item-store">
        <b>{{ shopName }}</b>
      </p>
      <p class="box-item-note">
        {{ daysLeftMessage }}
      </p>
    </div>
    <div class="box-item-price">
      <div>{{ formattedPrice }} {{ currency }}</div>
      <div>
        <el-progress
          type="line"
          :color="progressColor"
          :show-text="false"
          :width="26"
          :percentage="progressPercentage"
        ></el-progress>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ECard",
  data() {
    return {
      currency: "PHP",
      dateStart: this.dateAdded,
      color: "#f56c6c",
      status: 'warning'
    };
  },
  computed: {
    progressColor(): string {
      // * success => #67C23A
      // * warning => #E6A23C
      return this.daysLeft < 0 ? "#67C23A" : "#E6A23C";
    },
    formattedPrice(): string {
      return this.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    diffDateTodayDateAdded(): number {
      const today = this.today.getTime();
      const dateAdded = this.dateAdded as Date;
      return this.getDaysByMilliseconds(today - dateAdded.getTime());
    },
    daysLeft(): number {
      return this.daysToDelay + 1 - this.diffDateTodayDateAdded;
    },
    daysLeftMessage(): string {
      if (this.daysLeft < 0) {
        return `${this.daysToDelay} Days DONE!!!`;
      } else if (this.daysLeft === 1) {
        return `${this.daysLeft} Day Left!`;
      } else if (this.daysLeft === 0) {
        return `Last Day Today!`;
      }
      return `${this.daysLeft} Days Left`;
    },
    progressPercentage(): number {
      return this.getValidPercentage(
        this.daysToDelay - this.daysLeft,
        this.daysToDelay
      );
    },
    today(): Date {
      return new Date() as Date;
    },
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
      default: new Date(),
    },
  },
  methods: {
    subtract(minuend: number, subtrahend: number): number {
      return minuend - subtrahend;
    },
    getDaysByMilliseconds(milliseconds: number): number {
      const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
      return Math.round(milliseconds / oneDayInMilliseconds);
    },
    getValidPercentage(progress: number, goal: number): number {
      const actualVal = Math.abs((progress * 100) / goal);
      return actualVal > 100 ? 100 : actualVal;
    },
    // getStatus(date_added: Date, days_to_delay: number): string {
    //   : "#f56c6c"
    //   return "#6f7ad3";
    // },
  },
});
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