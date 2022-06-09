import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";

import { GameContext } from "../../contexts/game";
import styles from "../../styles/room.module.css";
import { Button, CardList, Text, UserList } from "../../components";
import { useRouter } from "next/router";
import { useSocket } from "../../hooks/useSocket";
import { If } from "react-extras";
import { profiles } from "../../types/enums";

const Room: NextPage = () => {
  const profile = sessionStorage.getItem("clientProfile");

  const socket = useSocket("http://localhost:3333", {
    profile,
  });

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

    socket.on("votes", (data: Array<any>) => {
      setVotes(data.map(({ value }) => value));
    });

    socket.on("users", (data: Array<string>) => {
      setUsers(data);
    });
  }, [roomId, socket]);

  useEffect(() => {
    if (!socket || !selectedCard) {
      return;
    }

    socket.emit("votes", selectedCard);

    socket.on("votes", (data: Array<any>) => {
      setVotes(data.map(({ value }) => value));
    });
  }, [selectedCard, roomId, socket]);

  return (
    <div className={styles.container}>
      <UserList users={users} />
      <Text>Escolha uma das opções abaixo:</Text>
      <CardList cards={cards} />
      <div className={styles.optionButtons}>
        <If condition={profile === profiles.HOST}>
          <Button>Resetar</Button>
          <Button onClick={() => setHide(!hide)}>Revelar</Button>
        </If>
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
