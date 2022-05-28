import styles from "./input.module.css";
import { Text } from "../Text";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type Props = Partial<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> & {
  label: string;
  maxLength?: number;
};

export const Input = ({ label, ...props }: Props) => (
  <>
    <Text>{label}</Text>
    <input className={styles.input} type="text" {...props} />
  </>
);
