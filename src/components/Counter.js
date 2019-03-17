import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import styles from "../pages/scoreboard/Scoreboard.module.css"
import  cx from 'classnames';

export class Counter extends React.Component {
  render() {
    const {score, id, changeScore } = this.props;

    return (
      <div className={styles.counter}>
        <button className={cx(styles['counter-action'], styles.decrement)} onClick={() => {changeScore(id, -1)}}> - </button>
        <span className={styles["counter-score"]}>{score}</span>
        <button className={cx(styles['counter-action'], styles.decrement)} onClick={() => {changeScore(id, 1)}}> + </button>
      </div>
    );
  }
}

Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func,
};

export default connect(null, {changeScore})(Counter)
