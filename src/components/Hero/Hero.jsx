import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("about/22A91A61I6_processed.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sankar</h1>
        <p className={styles.description}>
          Full-Stack Developer specializing in React and Node.js, passionate about building scalable and efficient web applications.Let’s connect and create something amazing!
        </p>

        <a href="mailto:22a91a61i6@aec.edu.in" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
