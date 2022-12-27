import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.mainBanner)}>
        <div>
          <h1 className="hero__title">Hi. I'm Karim.</h1>
          <h1 className="hero__title">A Front Developer.</h1>
          <p className="hero__subtitle">
            I'm also a solution architect with a keen eye for designing
            workflows and bringing doodles to life.
          </p>
        </div>
        <div>
          <img
            src="https://iammassoud.ir/img/general/programmer.svg"
            alt="LOGO"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}
