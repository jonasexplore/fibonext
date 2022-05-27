import { useContext } from "react";
import { GameContext } from "../../contexts/game";
import styles from "./card.module.css";

type Props = {
  number: Number;
};

export const Card = ({ number }: Props) => {
  const { setSelectedCard, selectedCard } = useContext(GameContext);
  return (
    <div
      className={`${styles.container} ${
        selectedCard === number && styles.selected
      }`}
      onClick={() => setSelectedCard(number)}
    >
      {`${number}`}
    </div>
  );
};
