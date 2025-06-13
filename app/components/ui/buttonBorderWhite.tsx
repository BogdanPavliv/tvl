import styles from "../../styles/button-border-white/index.module.scss";
import { ButtonProps } from "../../types/buttons";

const ButtonBorderWhite: React.FC<ButtonProps> = ({ children }) => {
  return (
    <a className={styles.button_border_white} href="#">
      {children}
    </a>
  );
};

export default ButtonBorderWhite;
