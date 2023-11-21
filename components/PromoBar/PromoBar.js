import React from "react";
import styles from "./styles/PromoBar.module.css";
import callIcon from "../../public/icons/call.svg";
import Image from "next/image";

const PromoBar = () => {
  return (
    <div className={styles.promobar}>
      <div className={styles.container}>
        <a href="tel:0450 911 611">
          <Image src={callIcon} className={styles.phoneIcon} alt="call"></Image>
          <span className={styles.phone}>&nbsp; &nbsp; 0450 911 611</span>
        </a>
      </div>
    </div>
  );
};

export default PromoBar;
