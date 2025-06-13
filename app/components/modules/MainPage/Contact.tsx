"use client";
import styles from "../../../styles/contact/index.module.scss";
import ButtonGreen from "../../ui/buttonGreen";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.contact__inner}>
          <div className={styles.contact__left}>
            <iframe
              width="100%"
              height="592"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=592&amp;hl=en&amp;q=875%20School%20Street%20Ormond%20Beach,%20FL%2032174+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className={styles.contact__right}>
            <div className={`badge ${styles.badge_contact}`}>Contact</div>
            <h2 className={`section-title ${styles.contact_title}`}>
              Get In Touch With Us
            </h2>
            <div className={styles.contact__right__text}>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language.{" "}
            </div>
            <ul className={styles.contact__list}>
              <li className={`${styles.contact__item} ${styles.phone_contact}`}>
                +1 (234) 567-89-02
              </li>
              <li className={`${styles.contact__item} ${styles.email_contact}`}>
                travel@adventure.com
              </li>
            </ul>
            <div className="contact__action">
              <ButtonGreen>Contact Us</ButtonGreen>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
