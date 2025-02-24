import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className={styles.container}>
      {/* Particle Background */}
      <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: { enable: false },
    background: {
      color: "#0d1117",
    },
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 1 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 },
      },
    },
  }}
  className={styles.particles}
/>

      
      {/* Hero Image Animation */}
      <motion.img
        src={getImageUrl("about/22A91A61I6_processed.png")}
        alt="Image of me"
        className={styles.heroImg}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Hero Text Animation */}
      <motion.div
        className={styles.content}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className={styles.title}>Hi, I'm Sankar</h1>
        <p className={styles.description}>
          Full-Stack Developer specializing in React and Node.js, passionate about building scalable and efficient web applications. Let’s connect and create something amazing!
        </p>
        <a href="mailto:22a91a61i6@aec.edu.in" className={styles.contactBtn}>
          Contact Me
        </a>
      </motion.div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
