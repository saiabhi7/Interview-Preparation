import React, { useState } from "react";

const Question = ({
  question,
  goToNextQuestion,
  length,
  currentQuestion,
  setShowResult,
  handleAddAnswer,
  handleRemoveAnswer,
  goToPreviousQuestion,
}) => {
  const [isSelected, setIsSelected] = useState(null);
  const [optionSelected, setOptionSelected] = useState();

  const handleOptionSelection = (event, question, option, index) => {
    event.target.innerText === option.text && setIsSelected(index);

    setOptionSelected({
      id: question.id,
      optionAnswered: option.text,
      isCorrect: option.isCorrect,
    });
  };

  return (
    <div className="m-3 border border-black rounded-lg bg-gray-100 shadow-lg">
      <h2 className="text-3xl font-bold p-3">{question.question}</h2>
      <ul className="grid grid-cols-2 text-xl">
        {question.answerOptions.map((option, index) => (
          <li className="m-2" key={option.text}>
            <button
              className={
                (isSelected === index ? "bg-green-300" : "bg-gray-300") +
                " w-full rounded-lg p-3"
              }
              onClick={(e) => handleOptionSelection(e, question, option, index)}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
      {currentQuestion !== 0 && (
        <button
          className="m-3 bg-yellow-300 font-bold text-2xl p-3 rounded-lg w-1/4"
          onClick={() => {
            goToPreviousQuestion();
            handleRemoveAnswer();
          }}
        >
          Previous
        </button>
      )}
      {currentQuestion !== length - 1 ? (
        <button
          className={
            "m-3 font-bold text-2xl p-3 rounded-lg w-1/4 " +
            (optionSelected
              ? " bg-yellow-300"
              : "bg-gray-300 cursor-not-allowed")
          }
          disabled={optionSelected ? false : true}
          onClick={() => {
            goToNextQuestion();

            handleAddAnswer(optionSelected);
          }}
        >
          Next
        </button>
      ) : (
        <button
          className={
            "m-3 font-bold text-2xl p-3 rounded-lg w-1/4 " +
            (optionSelected
              ? " bg-yellow-300"
              : "bg-gray-300 cursor-not-allowed")
          }
          disabled={optionSelected ? false : true}
          onClick={() => {
            setShowResult();
            handleAddAnswer(optionSelected);
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Question;
