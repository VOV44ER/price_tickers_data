import { SET_STONKS, VISIBLE_STONKS, REMOVE_STONK, REMOVED_STONKS, ADD_STONK } from './actionTypes'

const initialState = {
  visible: ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA'],
  removed: [],
  stocks: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_STONKS:
      return {...state, stocks: action.payload};
    case VISIBLE_STONKS:
      return {...state, visible: action.payload};
    case REMOVED_STONKS:
      return {...state, removed: action.payload};
    case REMOVE_STONK:
      return {
        visible: [...state.visible.filter(item => item !== action.payload)],
        stocks: [...state.stocks.filter(stock => stock.ticker !== action.payload)],
        removed: [].concat(state.removed).concat([action.payload]),
      }
    case ADD_STONK:
      return {
        ...state,
        visible: [].concat(state.visible).concat([action.payload]),
        removed: [...state.removed.filter(item => item !== action.payload)],
      }

    default:
      return state;
  }
};

export default reducer;
