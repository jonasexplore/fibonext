import { For, If } from "react-extras";
import styles from "./card-list.module.css";
import { Card } from "../Card";

type Props = {
  cards: number[];
  disable?: boolean;
  hide?: boolean;
};

export const CardList = ({ cards, disable = false, hide = false }: Props) => {
  const renderCards = (number: number, index: number) => (
    <Card key={Number(index)} number={number} disable={disable} hide={hide} />
  );

  return (
    <div className={styles.container}>
      <If condition={Boolean(cards?.length)}>
        <For of={cards} render={renderCards} />
      </If>
    </div>
  );
};
