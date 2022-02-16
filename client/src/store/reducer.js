import { SET_STONKS } from './actionTypes'

function reducer(state = [], action) {
  switch (action.type) {
    case SET_STONKS:
      return {...state, stocks: action.payload};

    default:
      return state;
  }
};

export default reducer;
