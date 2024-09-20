import styles from "./home.module.css";
import Link from "next/link";
import ArticleIcon from "@mui/icons-material/Article";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span>Edafe Ezekiel</span>
      <div className={styles.links}>
        <Link href="#" className={styles.link}>
          Home
        </Link>

        <Link href="#" className={styles.link}>
          Experience
        </Link>
        <Link href="#" className={styles.link}>
          Portfolio
        </Link>
        <Link href="#" className={styles.link}>
          Blog
        </Link>
        <Link href="#" className={styles.link}>
          Contact
        </Link>
      </div>
      <Link
        className={styles.download}
        href="/assets/Edafe_Ezekiel_Resume.pdf"
        download="Edafe_Ezekiel_Resume.pdf"
        target="_blank"
      >
        <ArticleIcon style={{ color: "#65f2f7" }} />
        Download CV
      </Link>
    </div>
  );
};

export default Navbar;
