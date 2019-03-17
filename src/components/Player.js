import React, {Component}  from 'react';
import Counter from "./Counter";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";
import styles from "../pages/scoreboard/Scoreboard.module.css"

export class Player extends Component {
  static propTypes = {
    score: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.number
  };

  componentWillReceiveProps(nextProps, nextContext) {
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.score !== this.props.score;
  }

  render() {
  const {removePlayer, name, score, id} = this.props;
    return (
      <div className={styles.player}>
        <span className={styles["player-name"]}>
          <button className={styles["remove-player"]} onClick={() => removePlayer(id)}>x</button>
        </span>
        <span className={styles["player-name"]}>
          {name}
        </span>
        <Counter score={score} id={id}/>
      </div>
    )
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    removePlayer: (id) => dispatch(removePlayer(id))
  }
};

export default connect(null, mapDispatchToProps)(Player);