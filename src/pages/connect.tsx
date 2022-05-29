import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { Button, Input } from "../components";

import styles from "../styles/connect.module.css";

const field = {
  name: "roomId",
  label: "Informe o código da sala",
};

const Connect: NextPage = () => {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    router.push(`/room/${form[field.name]?.value}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.container}>
        <Input
          label={field.label}
          minLength={7}
          maxLength={7}
          required
          name={field.name}
        />
        <div className={styles.button}>
          <Button type="submit">Entrar</Button>
          <Button href="/">Voltar</Button>
        </div>
      </div>
    </form>
  );
};

export default Connect;
