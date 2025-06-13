import styles from "../../styles/button-green/index.module.scss";
import { ButtonProps } from "../../types/buttons";

const ButtonGreen: React.FC<ButtonProps> = ({ children }) => {
  return (
    <a className={styles.button_green} href="#">
      {children}
    </a>
  );
};

export default ButtonGreen;
