import React, { useEffect, useRef } from "react";

// !3rd party
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

// !styles
import styles from "../styles/beforeStarted.module.css";

const BeforeStarted = () => {
  const teamAheadRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    // Animation for team text
    const teamAheadText = teamAheadRef.current;

    // Function to animate text printing
    const animateText = (element, text) => {
      // Clear existing text
      element.textContent = "";
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          element.textContent += text[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200);
    };

    gsap.fromTo(
      teamAheadText,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: teamAheadText,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            animateText(teamAheadText, "Team ahead");
            // Animation for the button
            const startBtn = document.getElementById("start_btn");
            gsap.fromTo(
              startBtn,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 1.5 }
            );
          },
        },
      }
    );
  }, []);

  return (
    <div className={styles.full}>
      <div className={styles.subtitle}> We take privacy seriously </div>
      <div className={styles.maintitle}> Before you get started </div>
      <div className={styles.Sbody}>
        "We won't share your answers with anyone (and won't ever tell <br /> you
        which friends said what about you)"
      </div>
      <div className={styles.sign_P}>
        <p>with love, </p>
        <p ref={teamAheadRef} className={styles.sign}></p>
      </div>
      <button id="start_btn">Start a test</button>
      <div className={styles.last}>Takes only 5 minutes</div>
    </div>
  );
};

export default BeforeStarted;
