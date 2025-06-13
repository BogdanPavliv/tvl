"use client";
import styles from "../../../styles/adventures/index.module.scss";
import { dataAdventures } from "../../../../utils/сountries";
import ButtonBorder from "../../ui/buttonBorder";
import Image from "next/image";
import { AdventureItem } from "../../../types/others";

const Adventures: React.FC = () => {
  return (
    <section className={styles.adventures} id="adventures">
      <div className="container">
        <div className={styles.adventures__inner}>
          <div className={`badge ${styles.badge_adventures}`}>
            Best Adventures
          </div>
          <h2 className={`section-title ${styles.adventures_title}`}>
            Our Popular <br />
            Tours & Expeditions
          </h2>
          <div className={styles.expeditions}>
            <ul className={styles.expeditions__list}>
              {dataAdventures.map((item: AdventureItem, index: number) => (
                <li key={index} className={styles.expeditions__list__item}>
                  <div className={styles.expeditions__list__content}>
                    <div className={styles.expeditions__list__way}>
                      {item.way}
                    </div>
                    <div className={styles.expeditions__list__date}>
                      {item.date}
                    </div>
                    <div className={styles.expeditions__list__price}>
                      {item.price}
                    </div>
                  </div>
                  <Image
                    className={styles.expeditions__list__image}
                    width={270}
                    height={176}
                    src={item.image}
                    alt={item.way}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.dataAdventures__actions}>
            <ButtonBorder>See more</ButtonBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adventures;
