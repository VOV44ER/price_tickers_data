import { ADD_STONK, REMOVE_STONK, SET_STONKS, VISIBLE_STONKS } from './actionTypes'

export const setStonks = stonks => ({
  type: SET_STONKS,
  payload: stonks
});

export const setVisible = stonks => ({
  type: VISIBLE_STONKS,
  payload: stonks
})

export const removeStonk = stonk => ({
  type: REMOVE_STONK,
  payload: stonk
})

export const addStonk = stonk => ({
  type: ADD_STONK,
  payload: stonk
})
