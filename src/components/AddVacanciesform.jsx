import React, { useState } from "react";

function AddVacanciesform({ setCurrVcancies, setShowModal, currElement, onEdit }) {
  const [values, setValue] = useState(currElement);

  // Update the form to differentiate between editing and adding a new vacancy
  const isEdit = !!currElement;

  return (
    <div className="wrapper__popup">
      <div className="popup">
        <input
          type="text"
          value={values?.postion || ""}
          placeholder="Position"
          onChange={(e) =>
            setValue((prev) => {
              return { ...prev, postion: e.target.value };
            })
          }
        />
        <br />
        <input
          type="text"
          value={values?.type || ""}
          placeholder="type"
          onChange={(e) =>
            setValue((prev) => {
              return { ...prev, type: e.target.value };
            })
          }
        />
        <br />
        <input
          type="text"
          value={values?.salary || ""}
          placeholder="salary"
          onChange={(e) =>
            setValue((prev) => {
              return { ...prev, salary: e.target.value };
            })
          }
        />
        <br />
        {/* Show different text on the button based on whether it's editing or adding */}
        <button
          onClick={() => {
            if (
              values?.type?.length &&
              values?.postion?.length &&
              values?.salary >= 0
            ) {
              if (isEdit) {
                onEdit(values);
              } else {
                setCurrVcancies((prev) => [...prev, values]);
              }
              setShowModal((prev) => !prev);
            } else {
              alert("Please add values for type and salary");
            }
          }}
        >
          {isEdit ? "Edit" : "Add data"}
        </button>
      </div>
    </div>
  );
}

export default AddVacanciesform;
