import { For, If } from "react-extras";
import styles from "./card-list.module.css";
import { Card } from "../Card";

type Props = {
  cards: Number[];
};

export const CardList = ({ cards }: Props) => {
  const renderCards = (number: Number, index: Number) => (
    <Card key={Number(index)} number={number} />
  );

  return (
    <div className={styles.container}>
      <If condition={Boolean(cards?.length)}>
        <For of={cards} render={renderCards} />
      </If>
    </div>
  );
};
