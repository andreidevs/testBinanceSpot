<template>
  <div class="content">
    <a-tag class="w-full mx-2" color="#108ee9"> Symbol = {{ currentSymbol }} </a-tag>
    <a-select
      class="ml-2 mt-4"
      default-value="BTCUSDT"
      style="width: 220px"
      v-model="currentSymbol"
      @select="select"
    >
      <a-select-option v-for="(item, index) in options" :key="index" :value="item">
        {{ item }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
export default {
  name: "DiffList",
  data: () => ({
    options: ["BTCUSDT", "BNBBTC", "ETHBTC"],
    currentSymbol: "BTCUSDT",
  }),
  methods: {
    select(val) {
      this.$emit("select");
      this.$bus.$emit("symbol", this.currentSymbol);
    },
  },
};
</script>

<style scoped></style>
