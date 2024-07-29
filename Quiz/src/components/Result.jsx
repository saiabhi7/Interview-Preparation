import React from "react";
import questions from "../constants/questions.json";
import Question from "./Question";

const Result = ({ finalReport }) => {
  const correctAnswers = finalReport.filter((question) => question.isCorrect);

  console.log(finalReport);
  return (
    <div>
      <h1 className="text-2xl m-3">
        You have got{" "}
        <span className="font-bold text-3xl">{correctAnswers.length}</span>{" "}
        correct Answers out of{" "}
        <span className="font-bold text-3xl">{questions.length}</span>{" "}
        Questions.
      </h1>
      <p className="font-semibold text-2xl m-3">
        Below is the detailed analysis of your test.
      </p>
      <div>
        {finalReport.map((answeredQuestion) => {
          return questions.map((question) => {
            if (
              answeredQuestion.id === question.id &&
              !answeredQuestion.isCorrect
            ) {
              return (
                <div
                  key={answeredQuestion.id}
                  className="border border-black rounded-lg shadow-lg bg-gray-200 m-4 p-2 grid grid-cols-12"
                >
                  <p className="font-semibold text-xl m-3 col-span-6">
                    {question.question}
                  </p>
                  <p className="text-xl m-3 col-span-3">
                    Your Answer:{" "}
                    <p className="font-semibold">
                      {answeredQuestion.optionAnswered}
                    </p>
                  </p>
                  <p className="text-xl m-3 col-span-3">
                    Correct Answer:
                    <p className="font-semibold">
                      {
                        question.answerOptions.filter(
                          (option) => option.isCorrect
                        )[0].text
                      }
                    </p>
                  </p>
                </div>
              );
            }
          });
        })}
      </div>
    </div>
  );
};

export default Result;
