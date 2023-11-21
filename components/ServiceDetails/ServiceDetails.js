import React from "react";
import styles from "./ServiceDetails.module.css";
import Image from "next/image";
import redesignImage from "../../public/images/serviceDetailsImages/redesignImage.svg";
import developmentImage from "../../public/images/serviceDetailsImages/developmentImage.svg";
import consultingImage from "../../public/images/serviceDetailsImages/consultingImage.svg";
import redesignSnakeTimeline from "../../public/images/serviceDetailsImages/redesignSnakeTimeline.svg";
import developmentSnakeTimeline from "../../public/images/serviceDetailsImages/developmentSnakeTimeline.svg";
import consultingSnakeTimeline from "../../public/images/serviceDetailsImages/consultingSnakeTimeline.svg";
import webRedesignOverlay from "../../public/images/serviceDetailsImages/webRedesignOverlay.svg";
import webDevelopmentOverlay from "../../public/images/serviceDetailsImages/webDevelopmentOverlay.svg";
import webConsultingOverlay from "../../public/images/serviceDetailsImages/webConsultingOverlay.svg";
import { arrowSvg } from "./utils/serviceDetailsUtils";
import PricingCards from "../PricingCards/PricingCards";

function ServiceDetails() {
  const serviceDetails = [
    {
      id: "webRedesign",
      heading: "WEB REDESIGN",
      rightBgOverlay: true,
      headingOverlay: webRedesignOverlay,
      infoImage: redesignImage,
      infoText:
        "Your website is your brand's online home. Would you invite guests to your messy home? Give your website a modern feel. Allow your users to quickly find what they are looking for. If your call-to-actions aren't clear, they will stand out. If your layouts are outdated, we will highlight your key message and cut the fluff. Your website doesn't have a voice? It will sing.",
      leftArrow: arrowSvg("#152D45", "left"),
      timeline: redesignSnakeTimeline,
      plans: [
        {
          background: "#2B3A67",
          label: "Lite",
          planPrice: "$2,900-$4,900",
          category: "Approx 60 hours or 2 weeks",
          features: [
            "Content Review",
            "Honour brand guidelines",
            "Layout & design refresh",
            "Improved navigation",
            "Highlight key messages",
            "Progress review once per week",
            "Copy (text) improvement",
            "1 Month of post-launch support",
          ],
          button: [{ text: "CONTACT ➜", link: "/#contact" }],
          examples: [
            { text: "Example Website", link: "https://www.joinkaya.com/home" },
          ],
        },
        {
          background: "#151C31",
          label: "Plus",
          planPrice: "$5,900-$8,900",
          category: "Approx 110 hours or 4 weeks",
          carryForwardText: "Everything from Lite",
          features: [
            "Product/team photography",
            "Competitor analysis",
            "User behaviour analysis",
            "SEO optimisation",
            "6 months of web hosting",
            "10 stock photos",
            "Analytics integration",
            "2 Months of post-launch support",
          ],
          button: [{ text: "CONTACT ➜", link: "/#contact" }],
          examples: [
            { text: "Example Website", link: "https://montalto.com.au/" },
          ],
        },
        {
          background: "#06070D",
          label: "Pro",
          planPrice: "$11,900+",
          category: "Timeline to be provided after scope",
          carryForwardText: "Everything from Plus",
          features: [
            "Rush priority",
            "12 Months of web hosting",
            "Web animations",
            "Progress review twice per week",
            "Up to 35 stock photos",
            "Full customisability",
            "Provide testing enviroment",
            "Full reporting post launch",
            "3 months of post launch support",
          ],
          button: [{ text: "CONTACT ➜", link: "/#contact" }],
          examples: [
            { text: "Example Website", link: "https://shopvestirsi.com/" },
          ],
        },
      ],
    },
    {
      id: "webDevelopment",
      heading: "WEB DEVELOPMENT",
      headingOverlay: webDevelopmentOverlay,
      rightBgOverlay: false,
      infoImage: developmentImage,
      infoText:
        "From vision to digital reality. Bring your business idea to life and build your online home! We will work together to understand your brand, your goals and your customers. The website will reflects your brand’s personality and story. Elevate UX/UI to create a unique experience that is easy to navigate, optimised for SEO, and of course designed to convert users to customers.",
      rightArrow: arrowSvg("#568A7E", "right"),
      timeline: developmentSnakeTimeline,
      plans: [
        {
          background: "#3B4D55",
          label: "Lite",
          planPrice: "$3,900-$5,900",
          category: "Approx 80 hours or 3 weeks",
          features: [
            "Content Review",
            "Create brand guidelines",
            "Layout & design",
            "Improved navigation",
            "Highlight key messages",
            "Progress review once per week",
            "Copy (text) content writing",
            "1 month of post launch support",
          ],
          button: [{ text: "CONTACT ➜", link: "/#contact" }],
          examples: [
            {
              text: "Example Website",
              link: "https://presentmomentconsulting.ca/",
            },
          ],
        },
        {
          background: "#181F22",
          label: "Plus",
          planPrice: "$7,900-$10,900",
          category: "Approx 140 hours or 6 weeks",
          carryForwardText: "Everything from Lite",
          features: [
            "Product/team photography",
            "Competitor analysis",
            "User behaviour analysis",
            "10 stock photos",
            "SEO optimisation",
            "6 months of web hosting",
            "Analytics integration",
            "2 months of post launch support",
          ],
          button: [{ text: "CONTACT ➜", link: "/#contact" }],
          examples: [
            { text: "Example Website", link: "https://navunskin.com/" },
          ],
        },
        {
          background: "#06070D",
          label: "Pro",
          planPrice: "$16,900+",
          category: "Timeline to be provided after scope",
          carryForwardText: "Everything from Plus",
          features: [
            "Rush priority",
            "12 Months of web hosting",
            "Web animations",
            "Progress review twice per week",
            "Up to 35 stock photos",
            "Full customisability",
            "Provide testing enviroment",
            "Full reporting post launch",
            "3 months of post launch support",
          ],
          button: [{ text: "CONTACT ➜", link: "/#contact" }],
          examples: [
            { text: "Example Website", link: "https://www.doyoueven.com/" },
          ],
        },
      ],
    },
    {
      id: "webConsulting",
      heading: "WEB CONSULTING",
      headingOverlay: webConsultingOverlay,
      rightBgOverlay: true,
      infoImage: consultingImage,
      infoText:
        "Your website isn't converting? You have two choices: take action or do nothing. We'll work with you to analyse your website, your customers, their problems, and your overall goals. Together, we'll develop a plan to address the problem and present it to your board members in a 1.5-hour consultation session.",
      leftArrow: arrowSvg("#E1B333", "left"),
      timeline: consultingSnakeTimeline,
      plans: [
        {
          background:
            "linear-gradient(180deg, #06070D 0.01%, rgba(6, 7, 13, 0.80) 113.88%)",
          label: "Hourly",
          planPrice: "$80/h",
          category: "Hourly rate",
          starFeatures: ["1 hour free discussion"],
          plusFeatures: ["Strategies include:"],
          features: [
            "Ecommerce",
            "Profit first",
            "Content creation",
            "Customer purchase journeys",
            "Positioning",
            "Messaging",
            "Logistics (warehousing, deliveries, returns & rates)",
            "Product selection and pricing",
          ],
          button: [{ text: "CONTACT ➜", link: "/#contact" }],
        },
        {
          background:
            "linear-gradient(180deg, #06070D 0.01%, rgba(6, 7, 13, 0.80) 111.77%)",
          label: "Monthly",
          planPrice: "$1,600/m",
          category: "Monthly",
          starFeatures: [
            "1 hour free discussion",
            "Pay less than an employee",
            "Pause or cancel anytime",
            "Limited to 3 clients per month",
          ],
          plusFeatures: ["Strategies include:"],
          features: [
            "Ecommerce",
            "Profit first",
            "Content creation",
            "Customer purchase journeys",
            "Positioning",
            "Messaging",
            "Logistics (warehousing, deliveries, returns & rates)",
            "Product selection and pricing",
          ],
          button: [{ text: "CONTACT ➜", link: "/#contact" }],
        },
      ],
    },
  ];

  return (
    <div className={styles.serviceDetailsWrapper}>
      {serviceDetails.map((detail, index) => (
        <div
          className={
            detail.rightBgOverlay
              ? styles.rightOverlayDetailWrapper
              : styles.leftOverlayDetailWrapper
          }
          id={detail.id}
        >
          <div
            key={index}
            className={styles.serviceDetailsHeadingBlock}
            style={{
              backgroundImage: `url(${detail.headingOverlay.src})`,
            }}
          >
            <h2 className={styles.serviceDetailsHeading}>{detail.heading}</h2>
          </div>
          <div className={styles.serviceInfo}>
            <Image src={detail.infoImage} alt="infoImage"></Image>
            {detail.leftArrow ? (
              <div className={styles.leftArrow}>{detail.leftArrow}</div>
            ) : (
              <div className={styles.rightArrow}>{detail.rightArrow}</div>
            )}
            <p className={styles.serviceInfoText}>{detail.infoText}</p>
          </div>
          <div className={styles.timeline}>
            <Image src={detail.timeline} alt="timeline" priority={true}></Image>
          </div>
          {detail.plans && (
            <div className={styles.pricingPlans}>
              <h3>{detail.heading}</h3>
              <h2>PRICING</h2>
              <PricingCards plans={detail.plans} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ServiceDetails;
