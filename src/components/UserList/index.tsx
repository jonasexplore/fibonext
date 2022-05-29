import { For, If } from "react-extras";
import { User } from "../User";

import styles from "./user-list.module.css";

type Props = {
  users: string[];
};

export const UserList = ({ users }: Props) => {
  const renderUsers = () => <User />;

  return (
    <div className={styles.container}>
      <If condition={Boolean(users?.length)}>
        <For of={users} render={renderUsers} />
      </If>
    </div>
  );
};
