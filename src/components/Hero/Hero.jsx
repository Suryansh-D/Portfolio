import React from "react";
import TypedComponent from "./TypedComponent";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Suryansh</h1>
        <p className={styles.description}>
          I love to play with <span className={styles.purple}><TypedComponent /></span>
        </p>
        <a href="mailto:heysuryanshhere@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    
  );
};
