import React, {PureComponent}  from 'react';
import {Counter} from "./Counter";
import PropTypes from 'prop-types';

export class Player extends PureComponent {
  static propTypes = {
    removePlayer: PropTypes.func,
    score: PropTypes.number,
    id: PropTypes.number
  };

  render() {
  const {removePlayer, changeScore, name, score, id} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
        </span>
        <span className="player-name">
          {name}
        </span>
        <Counter score={score} changeScore={changeScore} id={id}/>
      </div>
    )
  }
};
