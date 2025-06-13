"use client";
import styles from "../../../styles/choose/index.module.scss";

const Choose: React.FC = () => {
  return (
    <section className={styles.choose}>
      <div className="container-md">
        <div className={styles.choose__inner}>
          <div className={styles.choose__suptitle}>Book Your Trip</div>
          <h1 className={styles.choose__title}>
            Choose Your Favorite Tour To Explore
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Choose;
