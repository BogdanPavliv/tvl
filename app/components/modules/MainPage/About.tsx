"use client";

import styles from "../../../styles/about/index.module.scss";
import ButtonOrange from "../../ui/buttonOrange";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "../../../../utils/variants";

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.about__inner}>
          <div className={styles.about__left}>
            <div className="badge">About</div>
            <motion.h2
              variants={FadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
              className={`section-title ${styles.about_title}`}
            >
              Explore Our Planet Together
            </motion.h2>
            <h3 className={`section-subtitle ${styles.about_subtitle}`}>
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </h3>
            <div className={styles.about__slogan__wrapper}>
              <div className={styles.about__slogan__title}></div>
              <div className={styles.about__slogan__subtitle}></div>
            </div>
            <div className={styles.about__bottom}>
              <ButtonOrange>About Us</ButtonOrange>
            </div>
          </div>
          <div className={styles.about__right}>
            <motion.div
              variants={FadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
              className={styles.about__right__wrapper}
            >
              <Image
                className={styles.about__img}
                width={470}
                height={592}
                src="/img/section-about/about-img-1.jpg"
                alt="About image"
              />
              <Image
                className={styles.about__img__absolute}
                width={270}
                height={400}
                src="/img/section-about/about-img-2.jpg"
                alt="About image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
