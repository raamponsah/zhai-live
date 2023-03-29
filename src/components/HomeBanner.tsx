import styles from "@/styles/HomeBanner.module.css";

const HomeBanner = () => {
  return <div className={styles.homeBanner}>
    <div className={styles.homeBannerText}>
        <h3 className={styles.homeBannerTitle}>Inspiring strong regenerative action
for people and planet</h3>
        {/* <p className={styles.homeBannerSubtitle}>A non-profit organization dedicated to the advancement of the arts and sciences.</p> */}
    </div>
  </div>;
};

export default HomeBanner;
