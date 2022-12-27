import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import imagesAir from "@site/static/img/air.jpg";
import imagesGit from "@site/static/img/datagit.jpg";
import imagesEkyc from "@site/static/img/ekyc.jpg";
import imagesOmni from "@site/static/img/omni.jpg";
import imagesRicha from "@site/static/img/richa.jpg";
const FeatureList = [
  {
    title: "AirAsia Booking Platform",
    imgSrc: imagesAir,
    description: (
      <p>
        The AirAsia online airline booking platform manages flight ticket
        booking, flight schedules, and delivery of necessary information to the
        end-users. This platform provides various services such as flight
        search, online ticket booking, 24/7 status check availability, price
        search, and other necessary tasks.
      </p>
    ),
    tags: ["GCP", "KUBERNETES", "NODEJS", "GO", "PYTHON"],
  },
  {
    title: "DataGit",
    imgSrc: imagesGit,
    description: (
      <p>
        My favorite participation on the internet is a persian tutorial website
        that strives to make quality education for everyone. I believe sharing
        is loving, so I started DataGit in 2016 as my favorite tech stack was
        swinging around Python, JavaScript, and Node.js programming languages.
      </p>
    ),
    tags: ["SSG", "KUBERNETES", "E-LEARNING", "REACT"],
  },
  {
    title: "OMNI.iAM",
    imgSrc: imagesOmni,
    description: (
      <p>
        An intelligent asset management solution focusing on digitalization,
        OMNI can help financial services companies onboard and manage the
        customers in less time and provide investment recommendations based on
        the client's risk assessment within seconds.
      </p>
    ),
    tags: ["AWS", "GRAPHQL", "NODEJS", "GO", "PYTHON"],
  },
  {
    title: "e-KYC",
    imgSrc: imagesEkyc,
    description: (
      <p>
        An End-to-End Digital Customer Onboarding (e-KYC) solution for customers
        in Malaysia using Computer Vision technologies utilizing OpenCV and
        Tesseract. This product helps businesses capitalize on new business
        opportunities created by digitizing identity verification and business
        processes.
      </p>
    ),
    tags: ["BACKEND", "DEEP LEARNING", "COMPUTER VISION", "PYTHON"],
  },
  {
    title: "RICHA",
    imgSrc: imagesRicha,
    description: (
      <p>
        It is ReGov’s Intelligent Contact Handling Assistant, a cloud-based
        conversational AI chatbot providing ability to understand new linguistic
        variants of intents focusing on the balance between security and user
        convenience.
      </p>
    ),
    tags: ["MACHINE LEARNING", "GRAPHQL", "CALL CENTER", "BACKEND", "PYTHON"],
  },
];

export default function HomepageFeatures() {
  return (
    <section className={clsx("container ", styles.features)}>
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Cards key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

function Cards({ imgSrc, title, description, tags }) {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsImages}>
        <img alt="image" src={imgSrc} />
      </div>
      <div className={clsx("hero", styles.cardsText)}>
        <h3>{title}</h3>
        {description}
        {
          <span>
            {tags.map((tag, index) => {
              return (
                <span key={index} className="badge badge--info">
                  {tag}
                </span>
              );
            })}
          </span>
        }
      </div>
    </div>
  );
}

// function Feature({ Svg, title, description }) {
//   return (
//     <div className={clsx("col col--4")}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }
