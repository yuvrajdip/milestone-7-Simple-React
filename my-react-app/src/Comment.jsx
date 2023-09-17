import React from 'react';

const Comment = ({comment}) => {
  const {name, email} = comment

  return (
    <div>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
    </div>
  );
};

export default Comment;