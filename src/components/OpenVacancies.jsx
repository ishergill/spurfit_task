import { useEffect, useState } from "react";

// !styles
import styles from "../styles/openVacancies.module.css";

// !3rd party
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AddVacanciesform from "./AddVacanciesform";
gsap.registerPlugin(ScrollTrigger);

function OpenVacancies({ isAdmin }) {
  const [showModal, setShowModal] = useState(false);
  const [currVcancies, setCurrVcancies] = useState([
    {
      postion: "Senior Full-Stack Engineer",
      type: "Full time",
      salary: 10000,
    },
    {
      postion: "Senior Full-Stack Engineer",
      type: "Full time",
      salary: 10000,
    },
    {
      postion: "Senior Full-Stack Engineer",
      type: "Full time",
      salary: 10000,
    },
  ]);
  const [currElement, setCurrElement] = useState({});

  const deleteVacancy = (index) => {
    setCurrVcancies((prev) => prev.filter((_, i) => i !== index));
  };

  const editVacancy = (editedVacancy) => {
    setCurrVcancies((prev) =>
      prev.map((vacancy) =>
        vacancy === currElement ? { ...editedVacancy } : vacancy
      )
    );
  };

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
      <h2>
        Open vacancies{""}
        {isAdmin ? (
          <button
            className="add--btn"
            onClick={() => setShowModal((prev) => !prev)}
          >
            add vacancies
          </button>
        ) : null}
      </h2>
      <div className={styles.cards}>
        {currVcancies.length > 0 ? (
          <>
            {currVcancies.map((vac, index) => (
              <div className={styles.card} key={index}>
                <div
                  style={{
                    fontSize: "1.4rem",
                    padding: "1rem 0 0 0.5rem",
                    fontWeight: "600",
                  }}
                >
                  {vac?.postion}
                </div>
                {isAdmin ? (
                  <div>
                    <button
                      onClick={() => {
                        setCurrElement(vac);
                        setShowModal(true);
                      }}
                      style={{
                        background: "green",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        background: "red",
                      }}
                      onClick={() => deleteVacancy(index)}
                    >
                      Delete
                    </button>
                  </div>
                ) : null}

                <ul className={styles["card-list"]}>
                  <li>{vac?.type}</li>
                  <li>Berlin or remote</li>
                  <li>${vac?.salary}</li>
                </ul>
                <button>See Details</button>
              </div>
            ))}
          </>
        ) : (
          <p
            style={{
              color: "black",
            }}
          >
            Nothing here yet...
          </p>
        )}
      </div>
      {showModal && (
        <AddVacanciesform
          setCurrVcancies={setCurrVcancies}
          setShowModal={setShowModal}
          currElement={currElement}
          onEdit={editVacancy}
        />
      )}
    </div>
  );
}

export default OpenVacancies;
