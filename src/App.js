import React from 'react';
import './App.css';
import Header from "./components/haeder";
import {Player} from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm"
import {connect} from "react-redux";

class App extends React.Component {
  // handleRemovePlayer = (id) => {
  //   this.setState(prevState => {
  //     return {
  //       players: prevState.players.filter(player => player.id !== id)
  //     }
  //   })
  // };
  //
  // handleChangeScore = (id, delta) => {
  //   this.setState(prevstate => ({players: prevstate.players.map(player => {
  //     if (player.id === id){
  //       player.score = player.score + delta;
  //     }
  //     return player;
  //     })
  //   }))
  // };
  //
  // handleAddPlayer = (name) => {
  //   this.setState(prevState => {
  //     const maxId = prevState.players.reduce((max, player) => {
  //       return max > player.id ? max : player.id;
  //     }, 0);
  //
  //     return {
  //       players: [
  //         ...prevState.players,
  //         {id: maxId + 1, name, score: 0}
  //       ]
  //     }
  //   });
  // };

  render() {
    return (
      <div className="scoreboard">
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

export default connect(mapStateToProps)(App);
