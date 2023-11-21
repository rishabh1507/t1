import React from "react";
import PromoBar from "../components/PromoBar/PromoBar";
import HomeHero from "../components/HomeHero/HomeHero";
import Header from "../components/Header/Header";
import Head from "next/head";
//USP imports
import Usp from "../components/Usp/Usp";
import speaker from "../public/icons/speaker.svg";
import spark from "../public/icons/spark.svg";
import globe from "../public/icons/globe.svg";
//Service imports
import ServicesCard from "../components/ServicesCard/ServicesCard";
import websiteRedesign from "../public/images/services/websiteRedesign.png";
import renositesOverlay from "../public/images/services/renositesOverlay.svg";
import webDev from "../public/images/services/webDev.png";
import renositesAlphabetOverlay from "../public/images/services/renositesAlphabetOverlay.svg";
import webConsulting from "../public/images/services/webConsulting.png";
//TechStack imports
import TechStack from "../components/TechStack/TechStack";
import shopify from "../public/images/TechStackLogos/Shopify.svg";
import figma from "../public/images/TechStackLogos/Figma.svg";
import squarespaceLogo from "../public/images/TechStackLogos/squarespaceLogo.svg";
import techLogo2 from "../public/images/TechStackLogos/techLogo2.svg";
import techLogo3 from "../public/images/TechStackLogos/techLogo3.svg";
import nextLogo from "../public/images/TechStackLogos/nextJsLogo.svg";
import nodeLogo from "../public/images/TechStackLogos/nodeJsLogo.svg";
import wordPress from "../public/images/TechStackLogos/wordpressLogo.svg";

import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Reviews from "../components/Reviews/Reviews";
import Faqs from "../components/Faqs/Faqs";
import Footer from "../components/Footer/Footer";

const usps = [
  {
    icon: spark,
    description: "Elevate your online <br>presence",
  },
  {
    icon: globe,
    description: "Embark on the Ecommerce <br>journey",
  },
  {
    icon: speaker,
    description: "Prioritise aesthetics for <br>marketing campaigns",
  },
];

const services = [
  {
    background: renositesOverlay.src,
    backgroundColor: "#34363B",
    image: websiteRedesign,
    buttonText: "Web Redesign ➜",
    buttonLink: "/services#webRedesign",
    heading: "Web Redesign",
    text: "Your website is your brand's online home. Would you invite guests to your messy home? Give your website a modern feel. Allow your users to quickly find what they are looking for. If your call-to-actions aren't clear, they will stand out. If your layouts are outdated, we will highlight your key message and cut the fluff. Your website doesn't have a voice? It will sing.",
    textColor: "#ffffff",
    invert: false,
  },
  {
    background: renositesAlphabetOverlay.src,
    backgroundColor: "#1A3045",
    image: webDev,
    buttonText: "Web Development ➜",
    buttonLink: "/services#webDevelopment",
    heading: "Web Development",
    text: "From vision to digital reality. Bring your business idea to life and build your online home! We will work together to understand your brand, your goals and your customers. The website will reflects your brand’s personality and story. Elevate UX/UI to create a unique experience that is easy to navigate, optimised for SEO, and of course designed to convert users to customers.",
    textColor: "#ffffff",
    invert: true,
  },
  {
    background: renositesOverlay.src,
    backgroundColor: "#F9E99D",
    image: webConsulting,
    buttonText: "Web Consulting ➜",
    buttonLink: "/services#webConsulting",
    heading: "Web Consulting",
    text: "Your website isn't converting? You have two choices: take action or do nothing. We'll work with you to analyse your website, your customers, their problems, and your overall goals. Together, we'll develop a plan to address the problem and present it to your board members in a 1.5-hour consultation session.",
    textColor: "#000000",
    invert: false,
  },
];

const techLogos = [
  { logo: figma },
  { logo: techLogo3 },
  { logo: techLogo2 },
  { logo: shopify },
  { logo: squarespaceLogo },
  { logo: wordPress },
  { logo: nextLogo },
  { logo: nodeLogo },
];

const reviews = [
  {
    text: "Very professional & a genuine person. Delivered the assigned work flawlessly on time & has gone above & beyond of what he was supposed to do.",
    reviewer: "- Sahil, Teddies NFTs",
  },
  {
    text: "Outstanding experience with Eden! Highly recommended.",
    reviewer: "- Rizin, Rizin Designs",
  },
];

const faqs = [
  {
    question: "How long does website creation take?",
    answer:
      "Different websites have different requirements and complexities. Factoring in customer & competitor research, designs, development and deployment, please see below estimated times for completion from idea to launch:<br/><br/>Simple landing page ~2 weeks<br/>Multi-page non-Ecomm ~3-4 weeks<br/>Multi-page Ecomm ~6-7 weeks",
  },
  {
    question: "What kind of support is provided during the development?",
    answer:
      "During the development process there are regular catch-ups to monitor progress and align visions to ensure that your website is exactly how it’s supposed to be. Regardless of the project size, we will be by your side post launch to ensure that the live deployment of the site is smooth and customers are happy!",
  },
  {
    question: "What kind of websites do you specialise in?",
    answer:
      "If it can be built on the internet - we can do it. From personal portfolios, corporate, restaurant, trade to Ecommerce stores and everything in between.<br/><br/>Whether it’s front-end knowledge that requires modern UX & UI practices to ensure your customer converts and that your website navigates well; to back-end knowledge that is required for large scale & dynamic websites that uses APIs, security, databases, payment gateways, etc. to ensure its functionality is top notch - we have you covered!",
  },
  {
    question: "How much?",
    answer:
      "Wouldn't it be nice to just see a $ figure next to the project costs? Wouldn't it be nice to not need to speak to a sales person? Yup, it really would! Click <strong><a href='/services'>here</a></strong> to see prices:",
  },
  {
    question: "What are your payment terms?",
    answer:
      "50% upfront. The other 50% is only paid once you are fully satisfied with your new website.",
  },
  {
    question: "Do you use templates?",
    answer:
      "Typically, customers who want to use our design skills will be happy to use a template for 2 reasons:<br/><br/>1. The website needs to be up and running quick.<br/>2. The website isn’t complex - and money can be saved by using a template instead of developing a unique site from scratch.<br/><br/>Templates are just that - a template of a layout. Once your brand colours, images, text, and specific sections are added, the website will be unique to your brand as it should be.",
  },
  {
    question: "What programs do you use?",
    answer:
      "For websites we use Figma.<br/>To develop a custom site we use next.js, Javascript, HTML & CSS to write the code, and then deploy the site on platforms such as AWS Amplify or Vercel - depending on which will be more relevant.<br/><br/>If the website is utilising a template, then we have lots of experience with platforms such as Wordpress, Shopify, Webflow, Framer, SquareSpace and Wix. Each one of these templates serves a slightly different purpose - rest assured the right platform will be chosen to fit your website - should a template be most suitable.",
  },
  {
    question: "Do you do marketing?",
    answer:
      "What is a great website if no one sees it? While Renosites is a company that solely focuses on the design and development of websites, we acknowledge that the website may need an online push.<br/><br/>We know the right people for the job. If this is something you are interested in, be sure to mention it 🙂",
  },
  {
    question: "Where are you located?",
    answer:
      "Proudly Melbourne, Australia. If you’re around, let’s go out for coffee. My shout!",
  },
  {
    question: "Do you provide any security to my website?",
    answer:
      "At the end of a home build, it’s a wise decision to install some security cameras and an alarm system.<br/><br/>Yes, we offer Cyber Security services for email security, client data, cloud storage and safety, and can guide you on best practices while you navigate the digital world.<br/><br/>This is an add-on of $1,200 for set up. If this is something you are interested in, be sure to mention it 🙂",
  },
];

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Renosites</title>
        <link rel="icon" href="/faviconCircle.ico" />
      </Head>
      <PromoBar />
      <Header />
      <HomeHero />
      <Usp title="THERE’S A REASON YOU’RE HERE" usps={usps} />
      <ServicesCard services={services} />
      <TechStack techLogos={techLogos} />
      <About />
      <Contact />
      <Reviews reviews={reviews} />
      <Faqs faqs={faqs} />
      <Footer />
    </React.Fragment>
  );
}
