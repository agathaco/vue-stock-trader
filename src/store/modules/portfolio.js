// import stocks from '../../data/stocks'

const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  'BUY_STOCKS' ( state, {stockId, quantity, stockPrice }) {
    console.log(state.funds)
    const record = state.stocks.find(el => {
      return el.id == stockId //returns true if found record
    });
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id:stockId,
        quantity:quantity
      })
    }
    state.funds -= stockPrice * quantity
    console.log(quantity)
    console.log(state.funds)
  },
  'SELL_STOCKS' ( state, {stockId, quantity, stockPrice }) {
    const record = state.stocks.find(el => el.id == stockId)
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStocks: ({commit}, order) => {
    commit('SELL_STOCKS', order);
  },

};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(el => el.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        price: record.price,
        name: record.name
      }
    })
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
