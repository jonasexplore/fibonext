import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";

import { GameContext } from "../../contexts/game";
import styles from "../../styles/room.module.css";
import { Button, CardList, Text, UserList } from "../../components";
import { useRouter } from "next/router";
import { useSocket } from "../../hooks/useSocket";

const Room: NextPage = () => {
  const socket = useSocket(process.env.API_URL || "http://localhost:3333");

  const { cards, selectedCard } = useContext(GameContext);
  const [votes, setVotes] = useState<Array<number>>([]);
  const [users, setUsers] = useState<Array<string>>([]);
  const [hide, setHide] = useState<boolean>(true);

  const router = useRouter();
  const { roomId } = router.query;

  useEffect(() => {
    if (!socket || !roomId) {
      return;
    }

    socket.emit("join:room", roomId);

    socket.on("room:votes", (data: Array<any>) => {
      setVotes(data.map(({ value }) => value));
    });

    socket.on("room:users", (data: Array<string>) => {
      setUsers(data);
    });

    socket.on("room:visibility", (visible: boolean) => {
      setHide(visible);
    });
  }, [roomId, socket]);

  useEffect(() => {
    if (!socket || !selectedCard) {
      return;
    }

    socket.emit("room:votes", selectedCard);

    socket.on("room:votes", (data: Array<any>) => {
      setVotes(data.map(({ value }) => value));
    });
  }, [selectedCard, roomId, socket]);

  const handleVisibility = () => {
    socket.emit("room:visibility");
  };

  const handleReset = () => {
    socket.emit("room:reset");
  };

  return (
    <div className={styles.container}>
      <UserList users={users} />
      <Text>Escolha uma das opções abaixo:</Text>
      <CardList cards={cards} />
      <div className={styles.optionButtons}>
        <Button onClick={handleReset}>Resetar</Button>
        <Button onClick={handleVisibility}>Revelar</Button>
        <Button href="/">Voltar</Button>
      </div>
      <br />
      <div>
        <CardList cards={votes} disable hide={hide} />
      </div>
    </div>
  );
};

export default Room;
