import React from 'react';
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";
import PropTypes from 'prop-types';

export const Header = ({players, title}) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <StopWatch/>
    </header>
  )
};

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string
  }))
}