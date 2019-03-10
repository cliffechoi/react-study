import {UPDATE_TITLE, ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";

const initialState = {
  title: 'Redux ScoreBoard',
  players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
};

export const playerReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      };
    case ADD_PLAYER:
      let id = state.players.reduce((max, player) => {
        return max > player.id ? max : player.id;
      }, 0);
      state.players.push();
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.name,
            score: 0,
            id: id + 1
          }
        ]
      };
    case CHANGE_SCORE:
      let players = state.players.map(player => {
        if (player.id === action.id){
          player.score = player.score + action.delta;
        }
        return player;
      });

      return {...state, players: players};
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.id)
      };
    default:
      return state;
  }
};