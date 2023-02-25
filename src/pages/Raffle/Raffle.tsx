import React from "react";
import { useListUsers } from "../../state/hooks";
import useWinner from "../../state/hooks/useWinner";

const Raffle = () => {
  const users = useListUsers();
  const [winner, setWinner] = React.useState(users[0]);
  const [pair, setPair] = React.useState("");
  const resultWinner = useWinner();

  React.useEffect(() => {
    if (resultWinner.has(winner)) {
      setPair(resultWinner.get(winner)!);
    }
  }, [winner, resultWinner]);

  return (
    <section>
      <select
        name={"usernames"}
        id={"select-usernames"}
        placeholder={"Selecione o usuário"}
        required
        value={winner}
        onChange={(event) => setWinner(event.target.value)}
      >
        {users.map((user) => (
          <option key={user}>{user}</option>
        ))}
      </select>

      <p role={"alert"}>
        O par de {winner} é {pair}
      </p>
    </section>
  );
};

export default Raffle;
