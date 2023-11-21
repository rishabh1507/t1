import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./HamburgerMenu.module.css";
import Image from "next/image";
import downChevron from "../../public/icons/downChevronWhite.svg";

function HamburgerMenu({ closeMenu }) {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpenHamburgerMenu(true);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const handleLinkClick = () => {
    closeMenu();
  };

  const toggleServicesMenu = () => {
    setTimeout(() => {
      setServicesMenuOpen(!servicesMenuOpen);
    }, 200);
  };

  return (
    <div
      className={`${styles.hamburgerMenuBlock} ${
        openHamburgerMenu ? styles.open : ""
      }`}
    >
      <button className={styles.closeButton} onClick={closeMenu}>
        X
      </button>
      <div className={styles.hamburgerMenu}>
        <div
          className={styles.dropdownItem + " " + styles.menuItem}
          onClick={toggleServicesMenu}
        >
          <h4>SERVICES</h4>
          <Image src={downChevron} alt="arrow"></Image>
        </div>
        <div className={styles.menuItem}>
          {servicesMenuOpen && (
            <ul className={styles.submenu}>
              <Link href="/services" passHref>
                <li onClick={handleLinkClick}>All</li>
              </Link>
              <Link href="/services#webRedesign" passHref>
                <li onClick={handleLinkClick}>Web Redesign</li>
              </Link>
              <Link href="/services#webDevelopment" passHref>
                <li onClick={handleLinkClick}>Web Development</li>
              </Link>
              <Link href="/services#webConsulting" passHref>
                <li onClick={handleLinkClick}>Web Consulting</li>
              </Link>
            </ul>
          )}
        </div>
        <div className={styles.menuItem}>
          <Link href="/#about" onClick={handleLinkClick}>
            <h4>ABOUT</h4>
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link href="/#contact" onClick={handleLinkClick}>
            <h4>CONTACT</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
