import stocks from '../../data/stocks'
import axios from 'axios';

const state = {
  stocks: []
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;

  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      // stock.price = Math.round(stock.price * (Math.random() + 0.5))
      if(stock.price < 100) {
        stock.price = Math.round(stock.price * (1 + Math.random()));
    } else {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    }
    })
  }

};

const actions = {
  buyStocks ({commit}, order){
    commit('BUY_STOCKS', order);
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS')
  },
  loadData: ({commit}) => {
    var self = this;
    axios.get('data.json')
    .then(response => {
        if (response) {
            const stocks = response.data.stocks;
            const funds = response.data.funds;
            const stockPortfolio = response.data.stockPortfolio;
            const portfolio = {
                funds,
                stockPortfolio
            }
            commit('SET_STOCKS', stocks);
            commit('SET_PORTFOLIO', portfolio);
        }
    })
    .catch(error => console.log(error))
}
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}