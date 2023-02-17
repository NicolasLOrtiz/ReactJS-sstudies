import React from "react";
import { useListUsers } from "../../state/hooks";

const ListUsers = () => {
  const users = useListUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
};

export default ListUsers;
