import { NextPage } from "next";
import { useContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";

import { GameContext } from "../../contexts/game";
import styles from "../../styles/room.module.css";
import { Button, CardList, Text, UserList } from "../../components";
import { useRouter } from "next/router";

const client = io("localhost:3333");

const Room: NextPage = () => {
  const { cards, selectedCard } = useContext(GameContext);
  const [votes, setVotes] = useState<Array<number>>([]);
  const [users, setUsers] = useState<Array<string>>([]);

  const router = useRouter();
  const { roomId } = router.query;

  useEffect(() => {
    client.on("connect", () => {
      console.log("connected");
    });

    client.emit("join:room", roomId);

    client.on(String(roomId), (data: any) => {
      console.log(data);
    });

    client.on("votes", (data: Array<number>) => {
      setVotes(data);
    });

    client.on("users", (data: Array<string>) => {
      setUsers(data);
    });
  }, []);

  useEffect(() => {
    if (selectedCard) {
      client.emit("votes", selectedCard);
      client.on("votes", (data: Array<number>) => {
        setVotes(data);
      });
    }
  }, [selectedCard]);

  return (
    <div className={styles.container}>
      <UserList users={users} />
      <Text>Escolha uma das opções abaixo:</Text>
      <CardList cards={cards} />
      <div className={styles.optionButtons}>
        <Button>Resetar</Button>
        <Button>Revelar</Button>
        <Button href="/">Voltar</Button>
      </div>
      <br />
      <div>
        <CardList cards={votes} disable />
      </div>
    </div>
  );
};

export default Room;
