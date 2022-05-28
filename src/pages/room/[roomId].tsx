import { NextPage } from "next";
import { useContext } from "react";

import { GameContext } from "../../contexts/game";
import styles from "../../styles/room.module.css";
import { Button, CardList, User, Text } from "../../components";

const Room: NextPage = () => {
  const { cards } = useContext(GameContext);

  return (
    <div className={styles.container}>
      <User />
      <Text>Escolha uma das opções abaixo:</Text>
      <CardList cards={cards} />
      <div className={styles.optionButtons}>
        <Button>Resetar</Button>
        <Button>Revelar</Button>
        <Button href="/">Voltar</Button>
      </div>
    </div>
  );
};

export default Room;
