import React from "react";
import Image from "next/image";
import HomeImage from "../../public/images/HomeHero.png";
import styles from "./HomeHero.module.css";
import Link from "next/link";

function HomeHero() {
  return (
    <div className={styles.homeHeroSection}>
      <div className={styles.heroCta}>
        <h1 className={styles.hollowText}>RENOVATING</h1>
        <h1 className={styles.fillText}>WEBSITES</h1>
        <div className={styles.heroButtons}>
          <Link href="/services#pricing">
            <button className="gradientButton">PRICING ➜</button>
          </Link>
          <Link href="/#contact">
            <button className="gradientButton">CONTACT ➜</button>
          </Link>
        </div>
      </div>
      <Image src={HomeImage} alt="Home Hero" />
      <div className={styles.headerCta}>
        The perfect balance of function and aesthetics
      </div>
    </div>
  );
}

export default HomeHero;
