import React from "react";
import styles from "./TechStack.module.css";
import Image from "next/image";

function TechStack({ techLogos }) {
  return (
    <div className={styles.techStackBlock}>
      <h3 className={styles.techStackHeading}>
        WE USE THESE PLATFORMS & TOOLS
      </h3>
      <div className={styles.logoSection}>
        {techLogos.map((techLogo, index) => (
          <Image
            key={index}
            className={styles.techLogo}
            src={techLogo.logo}
            alt="techLogo"
          ></Image>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
