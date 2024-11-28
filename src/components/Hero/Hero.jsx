import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arshad</h1>
        <p className={styles.description}>
          I'm a developer with over 2 years of experience in Web Technologies and frameworks using Java and Python. I like breaking down complex problems into simple codes.
          <p>Reach out if you'd like to know more!</p>
        </p>
        <a href="mailto: mdaarshad777@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
