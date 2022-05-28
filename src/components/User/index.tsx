import PersonIcon from "../../assets/person.svg";
import styles from "./user.module.css";

export const User = () => {
  return (
    <div className={styles.container}>
      <PersonIcon fill="#8be9fd" width={48} height={48} alt="person icon" />
    </div>
  );
};
