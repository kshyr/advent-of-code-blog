import React from "react";
import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.description}>
      <div className={styles.container}>
        <h1>Project Goal</h1>
        <p className={styles.details}>
          I started this project with the purpose of learning TypeScript myself.
          <br />I will do my best to provide in-depth explanations for each
          solution and attach links to relevant documentation.
          <br />
          <br />
          If you find any mistakes or have any suggestions, please let me know!
        </p>
      </div>
    </section>
  );
}
