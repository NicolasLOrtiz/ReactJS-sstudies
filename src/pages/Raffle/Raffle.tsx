import React from "react";
import { useListUsers } from "../../state/hooks";

const Raffle = () => {
  const users = useListUsers();

  return (
    <section>
      <form>
        <select name={"usernames"} id={"select-usernames"}>
          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Raffle;
