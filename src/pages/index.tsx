import type { NextPage } from "next";
import { useContext } from "react";

import { CardList } from "../components/CardList";
import { GameContext } from "../contexts/game";

import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  const { cards } = useContext(GameContext);

  return (
    <div className={styles.container}>
      <CardList cards={cards} />
    </div>
  );
};

export default Home;
