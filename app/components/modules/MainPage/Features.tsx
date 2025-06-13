"use client";
import styles from "../../../styles/features/index.module.scss";
import ButtonOrange from "../../ui/buttonOrange";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.features__inner}>
          <div className={styles.features__left}>
            <div className={styles.features__left__img_wrapper}>
              <Image
                className={styles.features__img}
                width={470}
                height={592}
                src="/img/section-features/features-img-1.jpg"
                alt="Features image"
              />
              <Image
                className={styles.features__img__absolute}
                width={305}
                height={438}
                src="/img/section-features/features-img-2.jpg"
                alt="Features image"
              />
            </div>
          </div>
          <div className={styles.features__right}>
            <div className="badge">Features</div>
            <h2 className={`section-title ${styles.features_title}`}>
              Get Unique Experience
            </h2>
            <div className={styles.features__right__text}>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language.
            </div>
            <ul className={styles.features__list}>
              <li className={`${styles.features__item} ${styles.check}`}>
                Transfers
              </li>
              <li className={`${styles.features__item} ${styles.check}`}>
                Guides
              </li>
              <li className={`${styles.features__item} ${styles.check}`}>
                Optimal
              </li>
              <li className={`${styles.features__item} ${styles.check}`}>
                Locals
              </li>
            </ul>
            <div className={styles.features__action}>
              <ButtonOrange>Service</ButtonOrange>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
