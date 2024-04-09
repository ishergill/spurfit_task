import React, { useEffect } from "react";

//! styles
import styles from "../styles/thinkOfYou.module.css";

// !3rd party
import { gsap } from "gsap";

// !assets 
import {icon7, icon5, icon6, icon8 , icon2} from '../assets'
 

function ThinkOfYou() {
    useEffect(() => {
        const icon5Element = document.querySelector(`.${styles.icon5}`);
        const icon5_2Element = document.querySelector(`.${styles.icon5_2}`);
    
        var t1 = gsap.timeline({
          scrollTrigger: {
            trigger: "#title",
            start: "0 80%",
            end: "0px 80%",
            toggleActions: "restart none none none",
          },
        });
    
        var t2 = gsap.timeline({
          scrollTrigger: {
            trigger: "#title",
            start: "0 80%",
            end: "0px 80%",
            toggleActions: "restart none none none",
          },
        });
    
        var t3 = gsap.timeline({
          scrollTrigger: {
            trigger: "#title",
            start: "0 80%",
            end: "0px 80%",
            toggleActions: "restart none none none",
          },
        });
    
        t1.fromTo(
          "#title",
          { x: -1000, scale: 0, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, duration: 1.5 }
        );
    
        t2.fromTo(
          [icon5Element, icon5_2Element],
          { rotation: 0 },
          { rotation: 150, ease: "linear", duration: 1 }
        );
    
        t3.fromTo(
          "#sec5body",
          { x: -200, scale: 0, opacity: 0 },
          { x: 0, scale: 1, opacity: 1, duration: 1.5 }
        );
    
        const handleScroll = () => {
          const icon7Element = document.querySelector(`.${styles.icon7}`);
          if (icon7Element) {
            const rotation = window.scrollY;
            icon7Element.style.transform = `rotate(${rotation}deg)`;
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div className={styles.fullPage}>
      <div className={styles.full}>
        <img src={icon7} alt="" className={styles.icon7} />
        <img src={icon5} alt="" className={styles.icon5} />
        <img src={icon6} alt="" className={styles.icon6} />
        <div className={styles.title} id="title">
          <div className={styles.subtitle}>Built out of Frustration</div>
          <div className={styles.mainTitle}>Meet the ahead app</div>
        </div>
        <div className={styles.lowerSection}>
          <div className={styles.lowerLeft}>
            <div className={styles.graycircle}>
              <img src={icon8} alt="" className={styles.icon8} />
              <div className={styles.whitecircle}>
                <img className={styles.img2} src={icon2} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.lowerRight}>
            <img src={icon5} alt="" className={styles.icon5_2} />
            <div id="sec5body">
              <p>
                A personalized pocket coach that provides bite-sized,
                science-driven tools to boost emotional intelligence.
                <br />
                <br />
                Think of it as a pocket cheerleader towards a better, more
                fulfilling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThinkOfYou