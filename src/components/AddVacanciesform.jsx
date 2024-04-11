import React, { useState } from "react";

function AddVacanciesform({
  setCurrVcancies,
  setShowModal,
  currElement,
  onEdit,
  setCurrElement,
}) {
  const [values, setValue] = useState(currElement);

  const handleSubmit = () => {
    if (
      values?.type?.length &&
      values?.postion?.length &&
      values?.salary >= 0
    ) {
      if (Object.keys(currElement)?.length) {
        onEdit(values);
        setCurrElement({});
      } else {
        setCurrVcancies((prev) => [...prev, values]);
      }
      // Reset form values after submission
      setValue({});
      setShowModal((prev) => !prev);
    } else {
      alert("Please add values for type and salary");
    }
  };

  return (
    <div
      className="wrapper__popup"
      onClick={(e) => {
        setShowModal((prev) => !prev);
      }}
    >
      <div className="popup" onClick={(e) => e.stopPropagation()}>
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
        <button onClick={handleSubmit}>
          {Object.keys(currElement)?.length ? "Edit" : "Add data"}
        </button>
      </div>
    </div>
  );
}

export default AddVacanciesform;
