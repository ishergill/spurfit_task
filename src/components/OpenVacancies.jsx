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

  return (
    <div className={styles.openvacancies} id="openvacancies">
      {/* your other JSX */}
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
