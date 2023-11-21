import React from "react";
import styles from "./Usp.module.css";
import Image from "next/image";

const Usp = ({ title, usps }) => {
  return (
    <div className={styles.uspSection}>
      <h5 className={styles.uspHeading}>{title}</h5>
      <div className={styles.uspList}>
        {usps.map((usp, index) => (
          <div key={index} className={styles.usp}>
            <Image
              className={styles.uspIcon}
              src={usp.icon}
              alt="uspIcon"
            ></Image>
            <div className={styles.uspBorder} />
            <div className={styles.uspText}>
              <p dangerouslySetInnerHTML={{ __html: usp.description }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usp;
