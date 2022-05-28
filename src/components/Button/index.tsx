import { Fragment } from "react";
import { If } from "react-extras";
import styles from "./button.module.css";

type Props = {
  children: React.ReactNode;
  large?: boolean;
  icon?: any;
};

export const Button = ({ children, large, icon }: Props) => (
  <button className={`${styles.container} ${large && styles.large}`}>
    <If condition={Boolean(icon)}>
      <div className={styles.icon}>{icon}</div>
    </If>
    {children}
  </button>
);
