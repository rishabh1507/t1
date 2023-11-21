import React from "react";
import styles from "./PricingCards.module.css";
import greenTick from "../../public/icons/greenTick.svg";
import greenPlus from "../../public/icons/greenPlus.svg";
import star from "../../public/icons/star.svg";
import Image from "next/image";
import redirectLink from "../../public/icons/redirectLink.svg";
import Link from "next/link";

const PricingCards = ({ plans }) => {
  return (
    <div className={styles.pricingCardsContainer}>
      {plans.map((plan, index) => (
        <div className={styles.pricingCardBlock}>
          <div
            className={styles.pricingCard}
            key={index}
            style={{ background: plan.background }}
          >
            <div className={styles.label}>{plan.label}</div>
            <div className={styles.planDetails}>
              <h3 className={styles.planPrice}>{plan.planPrice}</h3>

              <p className={styles.category}>{plan.category}</p>
            </div>
            <div className={styles.borderBottom}></div>
            <div className={styles.features}>
              {plan.carryForwardText && (
                <div className={styles.featureWithIconRight}>
                  <p>
                    {plan.carryForwardText}
                    <Image src={greenPlus} alt="greenPlus"></Image>
                  </p>
                </div>
              )}
              <ul>
                {plan.starFeatures &&
                  plan.starFeatures.map((feature, index) => (
                    <li key={index}>
                      <span className={styles.tick}>
                        <Image src={star} alt="star"></Image>
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                {plan.plusFeatures &&
                  plan.plusFeatures.map((feature, index) => (
                    <li key={index}>
                      <span className={styles.tick}>
                        <Image src={greenPlus} alt="greenPlus"></Image>
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className={styles.tick}>
                      <Image src={greenTick} alt="greenTick"></Image>
                    </span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.contactButton}>
              <Link href={plan.button[0].link}>{plan.button[0].text}</Link>
            </div>
          </div>
          {plan.examples && (
            <div className={styles.examples}>
              <div className={styles.example} key={index}>
                {plan.examples.map((example, index) => (
                  <Link href={example.link} key={index} target="_blank">
                    {example.text}{" "}
                    {<Image src={redirectLink} alt="redirect"></Image>}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
