import styles from "./text.module.css";

type Props = {
  children: React.ReactNode;
};

export const Text = ({ children }: Props) => (
  <p className={styles.text}>{children}</p>
);
