import styles from "../../styles/button-border/index.module.scss";
import { ButtonProps } from "../../types/buttons";

const ButtonBorder: React.FC<ButtonProps> = ({ children }) => {
  return (
    <a className={styles.button_border} href="#">
      {children}
    </a>
  );
};

export default ButtonBorder;
