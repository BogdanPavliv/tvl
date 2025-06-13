"use client";
import Image from "next/image";
import styles from "../../../styles/blog/index.module.scss";
import ButtonBorderWhite from "../../ui/buttonBorderWhite";
import { dataArticles } from "../../../../utils/articles";
import { ArticlesItem } from "../../../types/others";

const Blog: React.FC = () => {
  return (
    <section className={styles.blog} id="blog">
      <div className="container">
        <div className={styles.blog__inner}>
          <div className={styles.blog__top}>
            <div className={styles.blog__top__left}>
              <div className={`badge ${styles.badge_blog}`}>Our Blog</div>
              <h2 className={`section-title ${styles.blog_title}`}>
                Read Our Travel Articles
              </h2>
            </div>
            <div className={styles.blog__top__right}>
              <ButtonBorderWhite>See more</ButtonBorderWhite>
            </div>
          </div>
          <div className={styles.blog__middle}>
            <div className={styles.articles}>
              {dataArticles.map((item: ArticlesItem, index: number) => (
                <article key={index} className={styles.article}>
                  <div className={styles.article__content__wrapper}>
                    <div className={styles.article__date}>{item.date}</div>
                    <div className={styles.article__content}>
                      <div className={styles.article__title}>{item.title}</div>
                      <Image
                        width={64}
                        height={64}
                        className={styles.article__img__author}
                        src={item.author}
                        alt={item.name}
                      />
                    </div>
                    <div className={styles.article__name}>{item.name}</div>
                  </div>
                  <Image
                    width={570}
                    height={336}
                    className={styles.article__img}
                    src={item.image}
                    alt={item.name}
                  />
                </article>
              ))}
            </div>
          </div>
          <div className={styles.blog__bottom}>
            <div className={styles.blog__bottom__left}>
              <div className={styles.blog__bottom__title}>Newsletter</div>
              <div className={styles.blog__bottom__subtitle}>
                Separated they live in right at the coast of the Semantics
              </div>
            </div>
            <div className={styles.blog__bottom__right}>
              <form className={styles.form_newsletter} id="form" action="#">
                <input
                  className={styles.form_newsletter__input}
                  type="text"
                  placeholder="Your Email"
                />
                <button
                  className={styles.form_newsletter__button}
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
