import type { NextPage } from "next";

import styles from "../styles/home.module.css";

import { Button } from "../components";
import EnterIcon from "../assets/enter.svg";
import CreateIcon from "../assets/create.svg";
import { generateId } from "../utils";

const Home: NextPage = () => {
  return (
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
          href={`/room/${generateId(7)}`}
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
          href={`/connect`}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
};

export default Home;
