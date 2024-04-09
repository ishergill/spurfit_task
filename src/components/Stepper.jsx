import React, { useEffect } from "react";

// !constant
import steps from "../constants/steps.json";

// !styles
import styles from "../styles/stepper.module.css";

// !3rd party
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { icon3 } from "../assets";

function Stepper() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    tl.from(
      ".timelineItem",
      { opacity: 0, stagger: 0.2, ease: "power2.inOut" },
      "-=0.2"
    );
    steps.forEach((_, index) => {
      const id = `timelineItem${index + 1}`;
      gsap.set(`#${id}`, { opacity: 0.1 });
      tl.to(`#${id}`, { opacity: 1 }, `-=${0.5 - index * 0.2}`);
    });

    ScrollTrigger.create({
      trigger: ".timeline",
      start: "top 80%",
      end: "bottom 20%",
      animation: tl,
      toggleActions: "play none none none",
      once: true,
    });

    return () => tl.kill();
  }, [steps]);

  useEffect(() => {
    gsap.fromTo(
      "#title",
      { x: -1000, scale: 0, opacity: 0 },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#title",
          start: "top 80%",
          end: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    const elementIcon1 = document.getElementById("eicon55");

    gsap.registerPlugin(MotionPathPlugin);

    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#eicon55",
        start: "0 60%",
        end: "0 60%",
        toggleActions: "restart none reset reverse",
      },
    });

    t1.to(elementIcon1, {
      duration: 3,
      rotation: -20, 
      motionPath: {
        path: [
          { x: 300, y: 0 }, // Starting point
          { x: 200, y: 20 }, // Control point
          { x: 0, y: 0 }, // Ending point
        ],
        curviness: 1,
      },
      opacity: 1,
    });
  }, []);
  
  return (
    <div className={styles.full}>
      <div className={styles.timelineSection}>
        <div className={styles.wrapperofsteppertitle}>
          <div id="title">
            <div className={styles.subTitle}>
              Wrong with self-improvement & how we're fixing it.
            </div>
            <div className={styles.mainTitle}>Self-improvement. Ugh.</div>
          </div>
          <img className={styles.icon3} src={icon3} alt="" id="eicon55" />
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineContent}>
            {steps?.map((event, index) => (
              <div
                key={event?.id}
                className={styles.timelineItem}
                id={`timelineItem${index + 1}`}
              >
                <div className={styles.eventTitle}>{event.title}</div>
                <span className={styles.description}>{event.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
