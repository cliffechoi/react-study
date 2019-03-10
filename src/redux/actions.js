// action create function
import {UPDATE_TITLE, ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./actionTypes";

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title // <== title: title
});

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
});

export const changeScore = (id, delta) => ({
  type: CHANGE_SCORE,
  id,
  delta,
});

export const removePlayer = (id) => ({
  type: REMOVE_PLAYER,
  id
});
