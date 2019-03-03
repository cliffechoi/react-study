import React from 'react';
import './App.css';
import {Header} from "./components/haeder";
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(player => player.id !== id)
      }
    })
  };

  handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevstate => ({players: prevstate.players.map(player => {
      if (player.id === id){
        player.score = player.score + delta;
      }
      return player;
      })
    }))
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />
        { this.state.players.map(player => <Player
          name={player.name}
          key={player.id.toString()}
          removePlayer={this.handleRemovePlayer}
          changeScore={this.handleChangeScore}
          score={player.score}
          id={player.id} />)}
      </div>
    );
  }
}

export default App;
