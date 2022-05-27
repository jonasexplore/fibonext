import { For, If } from "react-extras";
import styles from "./cardList.module.css";
import { Card } from "../Card";

type Props = {
  cards: Number[];
};

export const CardList = ({ cards }: Props) => {
  const renderCards = (number: Number) => <Card number={number} />;

  return (
    <div className={styles.container}>
      <If condition={Boolean(cards?.length)}>
        <For of={cards} render={renderCards} />
      </If>
    </div>
  );
};
