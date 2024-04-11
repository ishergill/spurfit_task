import React, { useState } from "react";
import styles from "../styles/StartTest.module.css";

function StartTest({ setShowStartTest }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const QuestionData = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
    },
    {
      question: "What is the chemical symbol for water?",
      answer: "H2O",
      options: ["H2O", "CO2", "NaCl", "NH3"],
    },
  ];

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === QuestionData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === QuestionData.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div
      className="wrapper__popup"
      onClick={() => setShowStartTest((prev) => !prev)}
    >
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        {showResult ? (
          <div className={styles.options}>
            <h2>Quiz Result</h2>
            <p>
              Your score: {score} out of {QuestionData.length}
            </p>
            <button onClick={() => setShowStartTest((prev) => !prev)}>
              Thanks
            </button>
          </div>
        ) : (
          <div>
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p>{QuestionData[currentQuestionIndex].question}</p>
            <div className={styles.options}>
              {QuestionData[currentQuestionIndex].options.map(
                (option, index) => (
                  <button key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StartTest;
