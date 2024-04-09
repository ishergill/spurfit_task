import React, { useEffect, useRef } from "react";

//! styles
import styles from "../styles/emotionsCards.module.css";

// !3rd party
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/all";

// !constants
import emotions from "../constants/emotions.json";
import { icon1 } from "../assets";

// !assets


gsap.registerPlugin(ScrollTrigger);

const EmotionCards = () => {
  const bcolor = ["#EEEBFD", "#FEEFD5", "#D8F2FE", "#FDF1EE", "#FEF7F1"];
  const cardsDivRef = useRef(null);

  useEffect(() => {
    gsap.to(cardsDivRef.current, {
      scrollTrigger: {
        trigger: cardsDivRef.current,
        start: "top 70%",
        scrub: 2,
        onEnter: () => {
          cardsDivRef.current.scrollLeft += 700;
        },
      },
      ease: "power3.inOut",
    });

    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#dtsf",
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none none none",
      },
    });

    t1.fromTo(
      "#dtsf",
      { x: -1000, scale: 0, opacity: 0 },
      { x: 0, scale: 1, opacity: 1, duration: 1.5 }
    );
  }, []);


  useEffect(() => {
    const elementIcon1 = document.getElementById("eicon1");

    gsap.registerPlugin(MotionPathPlugin);

    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#eicon1",
        start: "0 60%",
        end: "0 60%",
        toggleActions: "restart none reset reverse",
      },
    });

    t1.to(elementIcon1, {
      duration: 3,
      rotate: -20,

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
    <div className={styles.emotions}>
      <div className={styles.emotions_wrapper}>
        <h2 className={styles.emotions_title} id="dtsf">
          Does this sound familiar...
        </h2>
        <img className={styles.icon1} src={icon1} alt="" id="eicon1" />
      </div>
      <div className={styles.gallery}>
        <div className={styles.cards} ref={cardsDivRef}>
          {emotions.map((card, index) => (
            <div
              className={styles.card}
              key={index}
              style={{ backgroundColor: card?.id ===3 ? '#6342ef' : bcolor[card?.id % bcolor.length],

            color :card?.id ===3 ?'#fff' :'#000',
            transform : card?.id ===3 ? 'rotate(-6deg)' : 'rotate(0deg)'

            
            }}
            >
              <span className={styles.cardIcon} role="img" aria-label="emoji">
                {card.icon}
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionCards;



// {
//     "id": 7,
//     "title": "You argue with colleague7",
//     "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.",
//     "icon": "🥳"
// },
// {
//     "id": 8,
//     "title": "You argue with colleague8",
//     "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.",
//     "icon": "🤩"
// },
// {
//     "id": 9,
//     "title": "You argue with colleague9",
//     "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.",
//     "icon": "🧐"
// }