import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h4>Contact Us</h4>
      <div className={styles.cont}>
        <h3>Edafe Ezekiel</h3>
        <div className={styles.contact}>
          <p>
            <HomeIcon />
            <span>Villa Point Street, Ozoro, Delta State, Nigeria</span>
          </p>
          <p>
            <LocalPhoneIcon />
            <span>08160758477 / 09018533217</span>
          </p>
          <p>
            <MailOutlineIcon />
            <span>ezekieledafe5@gmail.com</span>
          </p>
        </div>
        <div className={styles.quickLinks}>
          <h5>Quick Links</h5>
          <div>
            <Link href="#">Home</Link>

            <Link href="#">Experience</Link>
            <Link href="#">Portfolio</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
