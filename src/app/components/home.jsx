import styles from "./home.module.css";
import Carousel from "./carousel";

import Navbar from "./navbar";
const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <Navbar />
        <Carousel />
      </div>
    </>
  );
};

export default Home;
