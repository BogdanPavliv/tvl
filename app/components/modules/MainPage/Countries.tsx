"use client";
import styles from "../../../styles/countries/index.module.scss";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataCountries } from "../../../../utils/сountries";
import { sliderChooseSettings } from "../../../../utils/common";
import { CountryItem } from "../../../types/others";

const Countries: React.FC = () => {
  return (
    <section className={styles.countries}>
      <div className="container-md">
        <div className={styles.countries__slider__wrapper}>
          <Slider
            {...sliderChooseSettings}
            className={styles.react_slick_countries}
          >
            {dataCountries.map((item: CountryItem, index: number) => (
              <div key={index} className={styles.countries__slide__wrapper}>
                <div className={styles.countries__slide}>
                  <Image
                    priority
                    width={270}
                    height={304}
                    className={styles.countries__slide__img}
                    src={item.image}
                    alt={item.city}
                  />
                  <div className={styles.countries__slide__city}>
                    {item.city}
                  </div>
                  <div className={styles.countries__slide__country}>
                    {item.country}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Countries;

// start
