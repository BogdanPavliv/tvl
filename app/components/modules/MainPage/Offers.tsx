"use client";
import styles from "../../../styles/offers/index.module.scss";
import React from "react";
import { dataOffers } from "../../../../utils/offers";
import Image from "next/image";
import { DestinationsItem } from "../../../types/others";

const Offers: React.FC = () => {
  return (
    <section className={styles.offers}>
      <div className="container">
        <div className={styles.offers__inner}>
          <div className={`badge ${styles.badge_offers}`}>Exclusive offers</div>
          <h2 className={`section-title ${styles.offers_title}`}>
            Discover Popular Destinations
          </h2>
          <div className={styles.destinations}>
            <ul className={styles.destinations__list}>
              {dataOffers.map((item: DestinationsItem) => (
                <li
                  key={item.country}
                  className={styles.destinations__list__item}
                >
                  <div className={styles.destinations__list__imege_wrapper}>
                    <Image
                      width={370}
                      height={400}
                      className={styles.destinations__list__imege}
                      src={item.image}
                      alt={item.country}
                    />
                    <div className={styles.circle}>
                      <div className={styles.circle__price}>{item.price}</div>
                    </div>
                  </div>
                  <div className={styles.destinations__list__city}>
                    {item.city}
                  </div>
                  <div className={styles.destinations__list__country}>
                    {item.country}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
