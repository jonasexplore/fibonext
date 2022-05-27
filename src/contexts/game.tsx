import { createContext, useState } from "react";

type GameProps = {
  cards: Number[];
  selectedCard?: Number;
  setSelectedCard: (number: Number) => void;
};

export const GameContext = createContext<GameProps>({} as GameProps);

type Props = {
  children: React.ReactNode;
};

export const GameProvider = ({ children }: Props) => {
  const [cards, setCards] = useState([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
  const [selectedCard, setSelectedCard] = useState<Number>();

  const value = {
    cards,
    selectedCard,
    setSelectedCard,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
