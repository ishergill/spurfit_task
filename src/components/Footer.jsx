

// !styles
import { appleLogo, email, locationIcon, logo } from "../assets";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.section12}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="" />
                <h3>ahead</h3>
            </div>
            <div className={styles.contactDetails}>
                <div className={styles.address}><img src={locationIcon} alt="" /><p>Augustraba 26, 10117 Berlin</p></div>
                <div className={styles.email}><img src={email} alt="" /><p>hasd@ahead-app.com</p></div>
            </div>
            <button className={styles.appStoreButton}>
              <img src={appleLogo} alt="" className={styles.appleLogo} />
              <section className={styles.appStoreButtonText}>
                <p className={styles.logoTitle}>Download on the</p>
                <p className={styles.logoSubtitle}>App Store</p>
              </section>
            </button>
            <div className={styles.copyright}> &#169; 2022 Ahead app. All rights reserved</div>
        </div>
  )
}

export default Footer