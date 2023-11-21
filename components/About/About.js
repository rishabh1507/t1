import React from "react";
import Image from "next/image";
import WhyRenosites from "../../public/images/whyRenosites.svg";
import styles from "./About.module.css";
import rocket from "../../public/icons/WhyRenositesIcons/rocket.svg";
import smiley from "../../public/icons/WhyRenositesIcons/smiley.svg";
import bars from "../../public/icons/WhyRenositesIcons/bars.svg";
import fingerprint from "../../public/icons/WhyRenositesIcons/fingerprint.svg";
import message from "../../public/icons/WhyRenositesIcons/message.svg";
import handshake from "../../public/icons/WhyRenositesIcons/handshake.svg";
import about from "../../public/images/about.svg";
import whyRenositesBlock from "../../public/images/whyRenositesBlock.svg";
import whyRenositesBlockMob2 from "../../public/images/whyRenositesMob2.svg";
import whyRenositesBlockMob3 from "../../public/images/whyRenositesMob3.svg";
import mobAbout from "../../public/images/mobAbout.svg";

function About() {
  const whyReasons = [
    {
      icon: rocket,
      text: "Conversion Focused",
    },
    {
      icon: smiley,
      text: "Customer First",
    },
    {
      icon: bars,
      text: "Data Driven",
    },
    {
      icon: fingerprint,
      text: "Uniquely Your Brand",
    },
    {
      icon: message,
      text: "Ongoing Support",
    },
    {
      icon: handshake,
      text: "Transparent Partnership",
    },
  ];
  return (
    <div className={styles.whyAboutWrapper}>
      <div className={styles.whyBlockWrapper}>
        {/* <h2 className={styles.whyHeading}>WHY RENOSITES?</h2>
        <div className={styles.whyRenositesSection}>
          <Image src={WhyRenosites} alt="WhyRenosites"></Image>
        </div>
        <div className={styles.whyBlock}>
          <h6>
            BECAUSE WE CREATE WEBSITES THAT ARE DESIGNED FOR YOUR CUSTOMERS, NOT
            FOR US.
          </h6>
          <div className={styles.whyReasons}>
            {whyReasons.map((reason, index) => (
              <div className={styles.reason} key={index}>
                <Image src={reason.icon} alt="icon"></Image>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div> */}
        <Image src={whyRenositesBlockMob3} className={styles.whyReno}></Image>
        <Image
          src={whyRenositesBlockMob3}
          className={styles.whyRenoMob}
        ></Image>
      </div>

      <h2 className={styles.aboutHeading} id="about">
        ABOUT
      </h2>
      <div className={styles.aboutBlockWrapper}>
        <div className={styles.aboutText}>
          <p className={styles.text}>
            I have been creating online shopping experiences for my entire
            career, be it as an employee or in my own Ecommerce business (2017,
            clothing, was called “Hubsixty”).
          </p>
          <p className={styles.text}>
            Renosites was founded in 2023 to continue building websites that are
            both beautiful and functional, but most importantly to solve real
            problems that online businesses face every day.
          </p>
          <p className={styles.text}>
            Let's speak about AI.
            <br></br>Do I use it? Yes. do I love it? Yes. Will it replace me?
            No. <br></br>Building a website that solves a real-life problem is a
            very human thing. It's very human to understand the struggles of a
            business owner with a website that isn't converting users to
            customers. It's very human to understand the struggles of a customer
            who reaches a website but can't find the information they expect to
            see.
          </p>
          <p className={styles.text}>
            So that's me, a human who understands your problems and wants to
            help you solve them.
          </p>
          <p className={styles.author}>
            <i>-Eden Benito</i>
          </p>
        </div>
        <Image src={about} className={styles.aboutImage} alt="about"></Image>
        <Image
          src={mobAbout}
          className={styles.aboutImageMob}
          alt="about"
        ></Image>
      </div>
    </div>
  );
}

export default About;
