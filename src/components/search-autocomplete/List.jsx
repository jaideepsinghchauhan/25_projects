import React from "react";

const List = ({ users, onListClicked }) => {
  return (
    <div>
      {users?.map((user) => (
        <li style={{ cursor: "pointer" }} onClick={() => onListClicked(user)}>
          {user}
        </li>
      ))}
    </div>
  );
};

export default List;
