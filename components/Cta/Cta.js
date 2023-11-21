import React from "react";
import styles from "./Cta.module.css";
import Image from "next/image";
import circles from "../../public/icons/ctaIcons/circles.svg";
import squares from "../../public/icons/ctaIcons/squares.svg";

function Cta() {
  return (
    <div className={styles.cta}>
      <div className={styles.squares}>
        <Image src={squares} alt="squares"></Image>
      </div>
      <div className={styles.ctaHeading}>
        <h5 className={styles.ctaStartContent}>OUR TASK IS TO CONVERT YOUR</h5>
        <h4 className={styles.ctaContent}>USERS INTO CUSTOMERS</h4>
      </div>
      <div className={styles.circles}>
        <Image src={circles} alt="circles"></Image>
      </div>
    </div>
  );
}

export default Cta;
