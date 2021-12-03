<template>
  <div class="card-container">
    <div class="box-container">
      <div class="box-item">
        <p class="box-item-name">{{ shortenedName }}</p>
        <p class="box-item-note">
          {{ daysLeftMessage }}
        </p>
      </div>

      <div class="box-item-price">
        <div>{{ formattedPrice }} {{ currency }}</div>
      </div>
    </div>
    <div>
      <el-progress
        type="line"
        :color="progressColor"
        :show-text="false"
        :width="100"
        :percentage="progressPercentage"
      ></el-progress>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ECard",
  data() {
    return {
      currency: "php",
      dateStart: this.dateAdded,
      color: "#f56c6c",
      status: "warning",
    };
  },
  computed: {
    // refactor and handle edge cases
    shortenedName(): string {
      return this.name.toLowerCase().slice(0, 15) + "...";
    },
    progressColor(): string {
      // primary & textColor from element-ui
      return this.daysLeft < 0 ? "#409EFF" : "#303133";
    },
    formattedPrice(): string {
      return this.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    diffDateTodayDateAdded(): number {
      const today = this.today.getTime();
      const dateAdded = new Date(this.dateAdded);
      return this.getDaysByMilliseconds(today - dateAdded.getTime());
    },
    daysLeft(): number {
      return this.daysToDelay + 1 - this.diffDateTodayDateAdded;
    },
    daysLeftMessage(): string {
      if (this.daysLeft < 0) {
        return `${this.daysToDelay} days done!`;
      } else if (this.daysLeft === 1) {
        return `${this.daysLeft} day left!`;
      } else if (this.daysLeft === 0) {
        return `last day today!`;
      }
      return `${this.daysLeft} days left`;
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
      type: String,
      required: true,
      default: "",
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
  },
});
</script>


<style scoped>
.card-container {
  padding: 1.25em .25em;
  margin: 1.25em .25em;
  border-bottom: 1px solid #F6F6F6;
}
.box-container {
  margin-right: 0;
  text-align: left;
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
  font-size: 0.8em;
}
.box-item-price {
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  font-weight: bold;
}
.el-progress {
  padding: .5em 0;
}
</style>