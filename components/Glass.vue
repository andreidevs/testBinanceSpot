<template>
  <div>
    <a-tag class="w-full mx-2" color="#108ee9"> Symbol = {{ symbol }} </a-tag>
    <a-spin :spinning="loading">
      <div class="spin-content">
        <div class="flex items-center justify-between m-2">
          <Table :items="glass.bids">Bids</Table>
          <Table :items="glass.asks" class="ml-2">Asks</Table>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script>
import Table from "./Table.vue";
export default {
  name: "MainView",
  components: { Table },
  data: () => ({
    glass: {
      bids: null,
      asks: null,
    },
    symbol: "BTCUSDT",
    ws: null,
  }),
  async asyncData() {
    await this.snap();
    this.wsSubscribe();
    this.$bus.$on("symbol", (symbol) => {
      this.symbol = symbol;
      this.ws.close();
      this.wsSubscribe();
    });
  },
  methods: {
    async snap() {
      try {
        this.loading = true;
        let glass = await this.$sdk.get(this.symbol);
        glass.bids = glass.bids.reverse();
        glass.asks = glass.asks.reverse();
        this.glass = glass;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    wsSubscribe() {
      try {
        this.ws = this.$sdk.subscribe(this.symbol);
        this.ws.onmessage = async (event) => {
          let data = JSON.parse(event.data);
          let [asksAdd, bidsAdd] = [
            data.a.filter((item) => item[1] != 0),
            data.b.filter((item) => item[1] != 0),
          ];
          asksAdd.reverse();
          bidsAdd.reverse();
          this.glass.asks.splice(this.glass.asks.length - asksAdd.length, asksAdd.length);
          this.glass.bids.splice(this.glass.bids.length - bidsAdd.length, bidsAdd.length);
          this.glass.asks = [...asksAdd, ...this.glass.asks];
          this.glass.bids = [...bidsAdd, ...this.glass.bids];
        };
      } catch (e) {
        console.error(e);
      }
    },
  },
  beforeDestroy() {
    this.$bus.$off("symbol");
  },
};
</script>
