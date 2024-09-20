import Link from "next/link";
import bkg from "../../../public/img/pic.png";
import Image from "next/image";
import styles from "./home.module.css";
const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.content}>
        <h3>
          I'm a <span>website</span> <br />/ <span>App</span> Developer
        </h3>
        <p>With over 3+ years of experience</p>
        <Link href="#" className={styles.btn}>
          Hire Me
        </Link>
      </div>
      <Image src={bkg} alt="Img" className={styles.image} />
    </div>
  );
};
export default Carousel;
