import React, {Component} from 'react';
import {Player} from "../../components/Player";
import {AddPlayerForm} from "../../components/AddPlayerForm";
import {connect} from "react-redux";
import styles from './Scoreboard.module.css';
import {Header} from "../../components/haeder";

class Scoreboard extends Component {
  render() {
    return (
      <div className={styles.scoreboard}>
        <Header title="My scoreboard" totalPlayers={this.props.players.length} players={this.props.players}/>
        { this.props.players.map(player => <Player
          name={player.name}
          key={player.id.toString()}
          removePlayer={this.handleRemovePlayer}
          changeScore={this.handleChangeScore}
          score={player.score}
          id={player.id} />)}
      <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  players: state.playerReducer.players
});

export default connect(mapStateToProps)(Scoreboard);