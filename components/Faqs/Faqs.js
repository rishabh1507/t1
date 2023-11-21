import React, { useState } from "react";
import styles from "./Faqs.module.css";
import Image from "next/image";
import downChevron from "../../public/icons/downChevron.svg";

const Faqs = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.faqsBlock}>
      <h2>FAQS</h2>
      <div className={styles.faqs}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faq}>
            <div
              className={styles.faqQuestion}
              onClick={() => handleToggle(index)}
            >
              <p>{faq.question}</p>
              <div
                className={`${styles.icon} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <Image src={downChevron} alt="down-arrow"></Image>
              </div>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
