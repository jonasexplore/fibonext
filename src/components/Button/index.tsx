import Link from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps, Fragment } from "react";
import { Choose, If } from "react-extras";
import styles from "./button.module.css";

type Props = Partial<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & {
  children: React.ReactNode;
  large?: boolean;
  icon?: any;
  href?: string;
};

export const Button = ({ children, large, icon, href, ...props }: Props) => {
  const CustomButton = (
    <button
      className={`${styles.container} ${large && styles.large}`}
      {...props}
    >
      <If condition={Boolean(icon)}>
        <div className={styles.icon}>{icon}</div>
      </If>
      {children}
    </button>
  );

  return (
    <Choose>
      <Choose.When condition={Boolean(href)}>
        <Link href={String(href)}>{CustomButton}</Link>
      </Choose.When>
      <Choose.Otherwise>{CustomButton}</Choose.Otherwise>
    </Choose>
  );
};
