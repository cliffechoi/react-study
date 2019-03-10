import React from 'react';

export const Statistics = (props) => {
  const totalPlayers = props.players.length;
  const totalScore = props.players.reduce((totalScore, player) => (totalScore + player.score), 0);

  return (
    <div>
      <table className="stats">
        <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
};