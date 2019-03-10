import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore, removePlayer} from "../redux/actions";

export class Counter extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func
  };

  render() {
    const {score, id, changeScore, removePlayer} = this.props;
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => {changeScore(id, -1)}}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={() => {changeScore(id, 1)}}> + </button>
        <button onClick={() => {removePlayer(id)}}>X</button>
      </div>
    );
  }
}

export default connect(null, {changeScore, removePlayer})(Counter)
