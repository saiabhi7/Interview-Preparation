import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import questions from "./constants/questions.json";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [finalReport, setFinalReport] = useState([]);

  const goToNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestion(currentQuestion !== 0 && currentQuestion - 1);
  };

  const handleAddAnswer = (optionSelected) => {
    const newOptionsAnswered = [...finalReport, optionSelected];
    setFinalReport(newOptionsAnswered);
  };

  const handleRemoveAnswer = () => {
    finalReport.pop();
    setFinalReport(finalReport);
  };
  {
    /*
      Heading
      Question
        Question
        Options
        Next button
      
    */
  }
  return (
    <div className="text-center m-3 w-1/2 mx-auto">
      <h1 className="text-6xl font-bold m-3">Namaste Quiz</h1>
      {showResult ? (
        <Result finalReport={finalReport} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          goToNextQuestion={() => goToNextQuestion()}
          key={currentQuestion}
          currentQuestion={currentQuestion}
          length={questions.length}
          setShowResult={() => setShowResult(true)}
          handleAddAnswer={handleAddAnswer}
          handleRemoveAnswer={handleRemoveAnswer}
          goToPreviousQuestion={goToPreviousQuestion}
        />
      )}
    </div>
  );
}

export default App;
