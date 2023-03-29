import styles from "@/styles/HomeBanner.module.css";
import Image from "next/image";

const HomeBanner = () => {
  return <div className={styles.homeBanner}>
    <div className={styles.homeBannerText}>
        <h1>Empowering the next generation of leaders</h1>
        <p>Our mission is to empower the next generation of leaders by providing them with the tools and resources they need to succeed.</p>
    </div>


    <div className={styles.homeBannerImage}>
        <Image src="/images/founder.jpeg" alt="home-banner" layout="fill" className={styles.image} />
    </div>

  </div>;
};

export default HomeBanner;
