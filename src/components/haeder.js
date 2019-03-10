import React from 'react';
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";

export const Header = ({players, title, updateTitle}) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1 onClick={() => updateTitle('ScoreBoard name Updated')}>{title}</h1>
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
};

let mapStateToProps = (state) => ({
  title: state.playerReducer.title,
  players: state.playerReducer.players
});

// let mapActionToProps = (dispatch) => ({
//   updateTitle: (title) => dispatch(updateTitle(title))
// });

export default connect(mapStateToProps, {updateTitle})(Header)
