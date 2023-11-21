import React from "react";
import styles from "./ServicesCard.module.css";
import Image from "next/image";
import serviceCircles from "../../public/icons/serviceCircles.svg";
import Link from "next/link";

function ServicesCard({ services }) {
  return (
    <div className={styles.serviceBlock}>
      <h2 className={styles.servicesHeading}>SERVICES</h2>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div
            key={index}
            className={service.invert ? styles.serviceInvert : styles.service}
            style={{
              background: `url(${service.background})`,
              backgroundRepeat: "no-repeat",
              height: "100%",
              backgroundColor: `${service.backgroundColor}`,
              backgroundPosition: service.invert ? "right" : "left",
              backgroundSize: "contain",
            }}
          >
            <div
              className={
                service.invert
                  ? styles.serviceImageSectionInvert
                  : styles.serviceImageSection
              }
            >
              <Image
                className={styles.serviceImage}
                src={service.image}
                alt="serviceImage"
              ></Image>
              <Link href={service.buttonLink}>
                <button
                  className={
                    "gradientButton gradientButtonLight" +
                    " " +
                    `${styles.serviceCta}`
                  }
                >
                  {service.buttonText}
                </button>
              </Link>
            </div>

            <div
              className={styles.serviceTextSection}
              style={{
                color: `${service.textColor}`,
                backgroundColor: `${service.backgroundColor}`,
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <h4 style={{ color: `${service.textColor}` }}>
                {service.heading}
              </h4>
              <div className={styles.serviceText}>
                <p>{service.text}</p>
              </div>
            </div>

            {index === 0 && (
              <div className={styles.floatingCirclesTopLeft}>
                <Image src={serviceCircles} alt="serviceCircles" />
              </div>
            )}

            {index === services.length - 1 && (
              <div className={styles.floatingCirclesBottomLeft}>
                <Image src={serviceCircles} alt="serviceCircles" />
              </div>
            )}
            <Link href={service.buttonLink}>
              <button
                className={
                  "gradientButton gradientButtonLight" +
                  " " +
                  `${styles.mobServiceCta}`
                }
                href={service.buttonLink}
              >
                {service.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCard;
