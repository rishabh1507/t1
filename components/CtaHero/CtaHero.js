import React from "react";
import Image from "next/image";
import heroOverlay from "../../public/images/heroOverlay.svg";
import styles from "./CtaHero.module.css";
import Link from "next/link";

function HeroCta({ heading, color }) {
  return (
    <div className={styles.heroCta} style={{ borderTop: `8px solid ${color}` }}>
      <p>JUMP TO</p>
      <h5 dangerouslySetInnerHTML={{ __html: heading }} />
      <p>PRICINGS</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="27"
        viewBox="0 0 28 27"
        fill="none"
      >
        <path
          d="M12.6251 0.348513C11.3811 1.00198 11.3592 1.19802 11.3592 9.95444L11.3374 17.9703L8.08545 14.6376C6.29578 12.8297 4.57159 11.2178 4.26604 11.1089C2.10534 10.2812 0.141073 11.8713 0.555752 14.1148C0.686703 14.8119 1.53789 15.7703 6.40491 20.6495C9.54774 23.8079 12.385 26.5307 12.7124 26.7049C13.4108 27.0752 14.3711 27.097 15.2223 26.7703C15.9207 26.5089 26.7242 15.8792 27.2043 14.9861C27.5754 14.2891 27.5972 12.8515 27.2698 12.1109C26.7678 11.0436 24.8472 10.5643 23.625 11.196C23.2976 11.3703 21.6389 12.9168 19.9365 14.6594C18.2342 16.3802 16.7719 17.7525 16.7064 17.6871C16.6409 17.6218 16.5973 13.9406 16.5973 9.5188V1.48118L15.8552 0.740591C15.2441 0.130692 14.9604 -1.90735e-06 14.1747 -1.90735e-06C13.6509 0.02178 12.9525 0.152473 12.6251 0.348513Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function CtaHero() {
  const heroCtas = [
    { id: "webRedesign", heading: "WEB <br>REDESIGN", color: "#4A71E7" },
    { id: "webDevelopment", heading: "WEB <br>DEVELOPMENT", color: "#67B7A5" },
    { id: "webConsulting", heading: "WEB <br>CONSULTING", color: "#FDD566" },
  ];

  return (
    <div className={styles.homeHeroSection}>
      <div className={styles.heroCtas}>
        {heroCtas.map((cta, index) => (
          <div className={styles.ctaHeroBlock}>
            <Link href={"#" + cta.id}>
              <HeroCta key={index} heading={cta.heading} color={cta.color} />
            </Link>
          </div>
        ))}
      </div>
      <Image src={heroOverlay} alt="Services Hero" />
    </div>
  );
}

export default CtaHero;
