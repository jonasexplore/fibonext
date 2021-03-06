import { useContext } from "react";
import { Choose } from "react-extras";
import { GameContext } from "../../contexts/game";
import styles from "./card.module.css";

type Props = {
  number: number;
  disable?: boolean;
  hide?: boolean;
};

export const Card = ({ number, disable = false, hide = false }: Props) => {
  const { setSelectedCard, selectedCard } = useContext(GameContext);

  return (
    <Choose>
      <Choose.When condition={disable}>
        <div
          className={`${styles.container} ${
            selectedCard === number && styles.selected
          }`}
        >
          {hide ? "?" : `${number}`}
        </div>
      </Choose.When>
      <Choose.Otherwise>
        <div
          className={`${styles.container} ${
            selectedCard === number && styles.selected
          }`}
          onClick={() => setSelectedCard(number)}
        >
          {`${number}`}
        </div>
      </Choose.Otherwise>
    </Choose>
  );
};
