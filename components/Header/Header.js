import React, { useState } from "react";
import Image from "next/image";
import fullLogo from "../../public/images/fullLogo.svg";
import mobLogo from "../../public/images/mobLogo.svg";
import styles from "./Header.module.css";
import sendIcon from "../../public/icons/sendIcon.svg";
import HamburgerIcon from "../../public/icons/HamburgerIcon.svg";
import Link from "next/link";
import downChevron from "../../public/icons/downChevronWhite.svg";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Header() {
  const [openHamburger, setOpenHamburger] = useState(false);

  const hamburgerHandler = () => {
    setOpenHamburger(!openHamburger);
  };

  return (
    <React.Fragment>
      <div className={styles.headerSection}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <Image src={fullLogo} alt="RENOSITES"></Image>
          </Link>
        </div>
        {/* <div className={styles.headerLogoMob}>
          <Link href="/">
            <Image src={mobLogo} width={40} alt="RENOSITES"></Image>
          </Link>
        </div> */}
        <div className={styles.hamburgerMenu} onClick={hamburgerHandler}>
          <Image src={HamburgerIcon} alt="menu"></Image>
        </div>

        <div className={styles.navMenu}>
          <div className={styles.dropdown}>
            <div className={styles.menuChev}>
              <a>SERVICES</a>
              <Image src={downChevron} alt="down-arrow"></Image>
            </div>
            <ul className={styles.servicesDropdown}>
              <Link href="/services">
                <li>All</li>
              </Link>
              <Link href="/services#webRedesign">
                <li>Web Redesign</li>
              </Link>
              <Link href="/services#webDevelopment">
                <li>Web Development</li>
              </Link>

              <Link href="/services#webConsulting">
                <li>Web Consulting</li>
              </Link>
            </ul>
          </div>
          <Link href="/#about">ABOUT</Link>
          <Link href="/#contact">
            <button className="callOutButton">
              CONTACT
              <span>
                <Image src={sendIcon} alt="sendIcon"></Image>
              </span>
            </button>
          </Link>
        </div>
      </div>
      {openHamburger && <HamburgerMenu closeMenu={hamburgerHandler} />}
    </React.Fragment>
  );
}

export default Header;
