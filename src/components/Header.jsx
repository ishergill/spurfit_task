import React, { useEffect } from 'react';

// !styles
import styles from "../styles/header.module.css";

// !3rd party
import { gsap } from 'gsap';
import { appleLogo, icon1, icon3, icon4, icon5, icon6, phone, stars } from '../assets';


const Header = () => {
  useEffect(() => {
    const icon1Element = document.getElementById('icon1');
    const icon3Element = document.getElementById('icon3');
    const icon4Element = document.getElementById('icon4');
    const icon5Element = document.getElementById('icon5');
    const dotCircleElement = document.querySelector(`.${styles.dot_circle}`);
    const dotCircleRadius = dotCircleElement.offsetWidth / 2;

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: `#icon1`,
        start: "top 90%", 
        end: "top 80%", 
        toggleActions: "restart none none none",
        duration: 3,
      },
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: `#icon1`,
        start: "top 90%", 
        end: "top 80%", 
        toggleActions: "restart none none none",
        duration: 3,
      },
    });

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: `#icon1`,
        start: "top 90%", 
        end: "top 80%", 
        toggleActions: "restart none none none",
        duration: 3,
      },
    });

    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: `#icon1`,
        start: "top 80%", 
        end: "top 80%", 
        toggleActions: "restart none none none",
        duration: 3,
      },
    });

    t1.fromTo(
      [icon1Element],
      { rotation: 45, transformOrigin: `-${dotCircleRadius}px 50%`, x: '500%' },
      { rotation: 0, ease: "power2.out", duration: 3 }
    );
    t2.fromTo(
      [icon3Element],
      { rotation: 45, transformOrigin: `18vw 32vw`, x: '-300%', y: '-310%' },
      { rotation: 0, ease: "power2.out", duration: 3 }
    );
    t3.fromTo(
      [icon4Element],
      { rotation: 45, transformOrigin: `25vw -13vw`, x: '-300%', y: '210%' },
      { rotation: 0, ease: "power2.out", duration: 3 }
    );
    t4.fromTo(
      [icon5Element],
      { rotation: 60 },
      { rotation: 300, ease: "power2.out", duration: 3 }
    );
  }, []);

  return (
    <div className={styles.full}>
      <div className={styles.home}>
        <div className={styles.icon5Wrapper}>
          <img className={styles.icon5} id="icon5" src={icon5} alt="" />
        </div>
        <img className={styles.icon6} id="icon6" src={icon6} alt="" />
        <section className={styles.text}>
          <div className={styles.innerContainer}>
            <div className={styles.subtitle}>Ahead App</div>
            <div className={styles.title}>Master your life <br />by mastering <br />emotions</div>
            <div className={styles.rating}>
              <button className={styles.appStoreButton}>
                <img src={appleLogo} alt="" className={styles.appleLogo} />
                <section className={styles.appStoreButtonText}>
                  <div className={styles.logoTitle}>Download on the</div>
                  <div className={styles.logoSubtitle}>App Store</div>
                </section>
              </button>
              <div className={styles.stars}>
                <img className={styles.star_image} src={stars} alt="" />
                <h3>100+ AppStore Reviews</h3>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.image}>
          <div className={styles.dot_circle}>
            <div className={styles.circle}></div>
            <img className={styles.phone_img} src={phone} alt="" />
            <img className={styles.icon1} id="icon1" src={icon1} alt="" />
            <img className={styles.icon3} id="icon3" src={icon3} alt="" />
            <img className={styles.icon4} id="icon4" src={icon4} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header ;
