import React, { useState } from "react";
import styles from "./Contact.module.css";
import contactEden from "../../public/images/contactEden.svg";
import Image from "next/image";

//Social Icons Black
import callEden from "../../public/icons/contactIcons/call.svg";
import emailEden from "../../public/icons/contactIcons/email.svg";
import insta from "../../public/icons/socialIcons/instaBlack.svg";
import twitter from "../../public/icons/socialIcons/twitterBlack.svg";
import tiktok from "../../public/icons/socialIcons/tikTokBlack.svg";
import linkedIn from "../../public/icons/socialIcons/linkedInBlack.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const sendContactForm = async (data) =>
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      return res.json();
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendContactForm(formData);
      console.log(response);
      if (response.success == true) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setError(null);
        setSuccess("Message sent successfully!");
        setTimeout(() => {
          setSuccess(null);
        }, 5000);
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div className={styles.contactWrapper} id="contact">
      <h2 className={styles.contactHeading}>CONTACT</h2>
      <div className={styles.contactSection}>
        <div className={styles.contactBlock}>
          <div className={styles.contactImageSection}>
            <Image
              src={contactEden}
              className={styles.contactImg}
              alt="contactEden"
            ></Image>
            <div className={styles.contactInfo}>
              <span>
                <Image src={emailEden} alt="emailEden"></Image>
                <p>
                  <a href="mailto:hello@renosites.com.au">
                    hello@renosites.com.au
                  </a>
                </p>
              </span>
              <span>
                <Image src={callEden} alt="callEden"></Image>
                <p>
                  <a href="tel:0450 911 611">0450 911 611</a>
                </p>
              </span>
            </div>
          </div>
          <div className={styles.contactSocialSection}>
            <a href="https://www.instagram.com/renosites" target="_blank">
              <Image src={insta} alt="socialIcon"></Image>
            </a>
            <a href="https://twitter.com/Renosites" target="_blank">
              <Image src={twitter} alt="socialIcon"></Image>
            </a>
            <a href="https://www.tiktok.com/@renosites" target="_blank">
              <Image src={tiktok} alt="socialIcon"></Image>
            </a>
            <a
              href="https://www.linkedin.com/company/renosites"
              target="_blank"
            >
              <Image src={linkedIn} alt="socialIcon"></Image>
            </a>
          </div>
          <div className={styles.contactFormBlock}>
            <form className={styles.contactFormSection} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="6"
                required
              />
              {success && <p className={styles.successMsg}>{success}</p>}
              {error && <p className={styles.errorMsg}>{error}</p>}
              <button className="gradientButton" type="submit">
                SEND ➜
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
