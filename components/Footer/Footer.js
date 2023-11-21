import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import renositesFooterLogo from "../../public/icons/footerIcons/renositesFooterLogo.svg";
import twitter from "../../public/icons/footerIcons/twitterWhite.svg";
import tiktok from "../../public/icons/footerIcons/tikTokWhite.svg";
import linkedin from "../../public/icons/footerIcons/linkedInWhite.svg";
import ig from "../../public/icons/footerIcons/instaWhite.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItems}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={renositesFooterLogo} alt="Renosites"></Image>
          </Link>
        </div>

        <ul className={styles.services}>
          <Link href="/#contact">
            <li className={styles.serviceItem}>Contact</li>
          </Link>
          <Link href="/services#pricing">
            <li className={styles.serviceItem}>Pricing</li>
          </Link>
          <Link href="/#about">
            <li className={styles.serviceItem}>About</li>
          </Link>
          <Link href="/services">
            <li className={styles.serviceItem}>Services</li>
          </Link>
        </ul>

        <div className={styles.socialIcons}>
          <a href="https://twitter.com/Renosites" target="_blank">
            <Image src={twitter} alt="twitter"></Image>
          </a>
          <a href="https://www.instagram.com/renosites" target="_blank">
            <Image src={ig} alt="ig"></Image>
          </a>
          <a href="https://www.tiktok.com/@renosites" target="_blank">
            <Image src={tiktok} alt="tiktok"></Image>
          </a>
          <a href="https://www.linkedin.com/company/renosites" target="_blank">
            <Image src={linkedin} alt="linkedin"></Image>
          </a>
        </div>
      </div>
      <div className={styles.bottomBar}>© RENOSITES 2023</div>
    </div>
  );
}

export default Footer;
