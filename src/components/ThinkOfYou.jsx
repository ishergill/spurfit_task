// thinkofyou.js
import React, { useEffect } from "react";

// !styles
import styles from "../styles/thinkOfYou.module.css";

// !3rd party
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThinkOfYou() {
  useEffect(() => {
    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.thinkofyouTitle}`,
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none reset reverse",
      },
    });
    t1.fromTo(
      `.${styles.thinkofyouSubtitle}`,
      { x: -200, opacity: 0 },
      { x: 40, opacity: 1, duration: 0.6 }
    );
    t1.to(`.${styles.thinkofyouSubtitle}`, { x: 0, duration: 0.3 });

    var t2 = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.thinkofyouSubtitle}`,
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none reset reverse",
      },
    });
    t2.fromTo(
      `.${styles.thinkofyouTitle}`,
      { x: 200, opacity: 0 },
      { x: -40, opacity: 1, duration: 0.6 }
    );
    t2.to(`.${styles.thinkofyouTitle}`, { x: 0, duration: 0.3 });

    var t3 = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.thinkofyouTitle}`,
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none none none",
      },
    });
    
    t3.fromTo(
      "#path-item", 
      { x: 200, scale: 0, opacity: 0 }, 
      { x: 0, scale: 1, opacity: 1, duration: 1.5 } 
    );


    var t4 = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.thinkofyouTitle}`,
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none reset reverse",
      },
      
    });
    t4.fromTo(
      `.${styles.container}`,
      { opacity: 0,  scale: 0.8 },
      { opacity: 1, duration: 1.3, scale: 1 }
    );
    t4.to(`.${styles.container}`, { duration: 0.3, scale: 1, y: 0 });
  }, []); 

  return (
    <div className={styles.thinkofyou}>
      <h5 className={styles.thinkofyouSubtitle}>Let your friends, family, and co-workers (anonymously) rate your social skills.</h5>
      <h2 className={styles.thinkofyouTitle}>Ever wondered what others think of you?</h2>
      <div className={styles.container}>
        <div className={styles.procedureChart}>
          <div className={styles.procedureStep} data-text="Answer questions on your social skills">
            <span>1</span>
          </div>
          <div
            className={styles.procedureStep}
            data-text="Let others anonymously answer the same questions about you">
            <span>2</span>
          </div>
          <div
            className={styles.procedureStep}
            data-text="Find out where you and others see things the same way - and where not!"
          >
            <span>3</span>
          </div>
        </div>
      </div>
      <div className={styles.pathChart}>
        <div className={styles.pathLine}>
          <div
            id='path-item'
            className={styles.pathItem}
            data-text="You"
            style={{ backgroundColor: "#6241eb" }}
          ></div>
          <div
            id='path-item'
            className={styles.pathItem}
            data-text="Anonymous 1"
            style={{ backgroundColor: "#41c2fc" }}
          ></div>
          <div
            id='path-item'
            className={styles.pathItem}
            data-text="Anonymous 2"
            style={{ backgroundColor: "#ffb53a" }}
          ></div>
          <div
            id='path-item'
            className={styles.pathItem}
            data-text="Anonymous 3"
            style={{ backgroundColor: "#59c896" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
