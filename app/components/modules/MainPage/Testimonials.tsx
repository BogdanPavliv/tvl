"use client";
import styles from "../../../styles/testimonials/index.module.scss";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataTestimonials } from "../../../../utils/сountries";
import { sliderTestimonialsSettings } from "../../../../utils/testimonials";
import { TestimonialsItem } from "../../../types/others";

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonials__inner}>
          <div className={`badge ${styles.badge_testimonials}`}>
            Testimonials
          </div>
          <h2 className={`section-title ${styles.testimonials_title}`}>
            Travel Tips From Travellers
          </h2>
          <div className={styles.testimonials__slider__wrapper}>
            <Slider
              {...sliderTestimonialsSettings}
              className={styles.react_slick_testimonials}
            >
              {dataTestimonials.map((item: TestimonialsItem, index: number) => (
                <div
                  key={index}
                  className={styles.teastimonials__slide__wrapper}
                >
                  <div className={styles.testimonials__slide}>
                    <div className={styles.testimonials__slide__response}>
                      {item.response}
                    </div>
                    <div className={styles.testimonials__slide__bottom}>
                      <Image
                        priority
                        width={78}
                        height={78}
                        className={styles.testimonials__slide__img}
                        src={item.image}
                        alt={item.name}
                      />
                      <div className={styles.testimonials__slide__text}>
                        <div className={styles.testimonials__slide__name}>
                          {item.name}
                        </div>
                        <div className={styles.testimonials__slide__role}>
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
