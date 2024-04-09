import { useEffect } from "react";

// !styles
import styles from "../styles/openVacancies.module.css";

// !3rd party
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function OpenVacancies() {
  useEffect(() => {
    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: `#openvacancies h2`, 
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none reset reverse",
      },
    });
  

    t1.fromTo(
      `#openvacancies h2`, 
      { x: -200, opacity: 0, fontSize: 0 },
      { x: 300, opacity: 1, duration: 0.6, fontSize: "3rem" }
    );
  
    t1.to(`.${styles.openvacancies} h2`, { x: 250, duration: 0.3 });
  }, []);
  

  return (
    <div className={styles.openvacancies} id="openvacancies">
      <h2>Open vacancies</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div
            style={{
              fontSize: "1.4rem",
              padding: "1rem 0 0 0.5rem",
              fontWeight: "600",
            }}
          >
            Senior Full-Stack Engineer
          </div>
          <ul className={styles["card-list"]}>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€65-85K, 0.5-1.5% equity share options</li>
          </ul>
          <button>See Details</button>
        </div>
        <div className={styles.card}>
          <div
            style={{
              fontSize: "1.4rem",
              padding: "1rem 0 0 0.5rem",
              fontWeight: "600",
            }}
          >
            Senior Design
          </div>
          <ul className={styles["card-list"]}>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€40-55K, 0.25-.50% equity share options</li>
          </ul>
          <button>See Details</button>
        </div>

        <div className={styles.card}>
          <div
            style={{
              fontSize: "1.4rem",
              padding: "1rem 0 0 0.5rem",
              fontWeight: "600",
            }}
          >
            Superstar intern
          </div>
          <ul className={styles["card-list"]}>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€20-24K, 0.5-1.5% equity share options</li>
          </ul>
          <button>See Details</button>
        </div>
      </div>
    </div>
  );
}

export default OpenVacancies;
