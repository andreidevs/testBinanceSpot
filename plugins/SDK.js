import axios from "axios"

export const SDK = {
  get: async (symbol) => {
    let glass = await axios.get(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=500`);   // снепшот
    return glass.data;
  },
  subscribe: function (symbol) {
    const { EventBus } = require('./eventBus');
    let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`);
    return ws     // сокет
  }
};