import React, { useState } from 'react';

const TeamUseState = () => {
  
  const teamStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius : '15px'
  }

  const [player , addPlayer] = useState(0)
  
  const handlePlayer = () => {
    // player = player+1 ;
    addPlayer(player+1);
  }

  const removePlayer = () => {
    addPlayer(player-1);
  }

  return (
    <div style={teamStyle}>
      <h3>Players : {player}</h3>
      <button onClick={handlePlayer}>Add Player</button><br/>
      <button onClick={removePlayer}>Remove Player</button>
    </div>
  );
};

export default TeamUseState;