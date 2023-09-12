import React from 'react';
import Friend from './Friend';

const Friends = () => {
  // mapping array of Objects
  const friends = [
    {name : 'Rahim', age : 27},
    {name : 'Lamim', age : 28},
    {name : 'Shamim', age : 29},
    {name : 'Hamim', age : 30}
  ]

  return (
    <div>
      {
        friends.map(friend=><Friend friend={friend}></Friend>)
      }    
    </div>
  );
};

export default Friends;