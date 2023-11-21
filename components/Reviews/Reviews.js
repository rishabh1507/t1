import React from "react";
import styles from "./Reviews.module.css";
import Image from "next/image";
import invertedCommaIcon from "../../public/icons/invertedCommaIcon.svg";

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviewSection}>
      <div className={styles.reviewList}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.review}>
            <Image
              className={styles.invertedCommaIcon}
              src={invertedCommaIcon}
              alt="invertedComma"
            ></Image>
            <div className={styles.reviewText}>
              <p>{review.text}</p>
              <p>{review.reviewer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
