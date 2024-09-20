import React from "react";
import styles from "./style.module.css";
import img1 from "./../../../public/img/portfolio1.png";
import Image from "next/image";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h4>Portfolio</h4>
      <div className={styles.content}>
        <div className={styles.box}>
          <Image src={img1} alt="Portfolio 1" />
          <h5>NFT Selling Platform</h5>
          <p>Built with NextJS</p>
          <p>
            <i>Developed June 2024</i>
          </p>
          <Link
            href="https://www.digitalmarketopial.com/"
            className={styles.btn}
            target="_blank"
          >
            View
          </Link>
        </div>
        <div className={styles.box}>
          <Image src={img1} alt="Portfolio 1" />
        </div>
        <div className={styles.box}>
          <Image src={img1} alt="Portfolio 1" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
