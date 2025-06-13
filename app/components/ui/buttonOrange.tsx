import styles from "../../styles/button-orange/index.module.scss";
import { ButtonProps } from "../../types/buttons";

const ButtonOrange: React.FC<ButtonProps> = ({ children }) => {
  return (
    <a className={styles.button_orange} href="#">
      {children}
    </a>
  );
};

export default ButtonOrange;
