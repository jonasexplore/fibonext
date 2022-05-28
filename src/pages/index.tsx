import type { NextPage } from "next";
import { useContext } from "react";
import { Button, CardList, Text, User } from "../components";

import { GameContext } from "../contexts/game";

import styles from "../styles/home.module.css";

import CreateIcon from "../assets/create.svg";
import EnterIcon from "../assets/enter.svg";

const Home: NextPage = () => {
  const { cards } = useContext(GameContext);

  return (
    <>
      <div className={styles.header}>
        <Text>Fibonext</Text>
      </div>
      <div className={styles.container}>
        <div className={styles.groupButtons}>
          <Button
            large
            icon={
              <CreateIcon
                fill="#f8f8f2"
                width={24}
                height={24}
                alt="create icon"
              />
            }
          >
            Criar sala
          </Button>
          <Button
            large
            icon={
              <EnterIcon
                fill="#f8f8f2"
                width={24}
                height={24}
                alt="create icon"
              />
            }
          >
            Entrar
          </Button>
        </div>
        <Button>Resetar</Button>
        <Button>Revelar</Button>
        <User />
        <Text>Escolha uma das opções abaixo:</Text>
        <CardList cards={cards} />
      </div>
      <div className={styles.footer}>
        <Text>Todos os direitos reservados.</Text>
      </div>
    </>
  );
};

export default Home;
