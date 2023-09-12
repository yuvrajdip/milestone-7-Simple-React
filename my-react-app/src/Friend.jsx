import React from 'react';

const Friend = (props) => {

  const {friend} = props;
  const {name , age}=friend;

  return (
    <div>
      <h4>  Name : {name} | age : {age}</h4>
    </div>
  );
};

export default Friend;