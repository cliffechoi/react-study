import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
  };

  render() {
    const {changeScore, score, id} = this.props;

    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore(id, -1)}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={() => changeScore(id, 1)}> + </button>
      </div>
    );
  }
}
