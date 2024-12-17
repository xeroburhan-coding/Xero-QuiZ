import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Result from "./Result";
import StartScreen from "./StartScreen";
import data from "../data.js";

const Quiz = () => {
  const [current, setCurrent] = useState(1);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [status, setStatus] = useState("none");

  const handleStart = () => setStatus("start");

  const handleNext = () => {
    setSelectedOption(null);
    setCurrent((prevCurrent) => prevCurrent + 1);
  };

  const handleResult = () => setStatus("finished");

  const handleRestart = () => {
    setCurrent(1);
    setScore(0);
    setStatus("none");
    setSelectedOption(null);
  };

  const handleOption = (option) => {
    setSelectedOption(option);
    if (option === data[current - 1].ans) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-10 text-3xl font-bold">XeroQUIZ</h1>
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-lg">
        {status === "start" ? (
          <QuestionCard
            current={current}
            data={data}
            selectedOption={selectedOption}
            handleOption={handleOption}
            handleNext={handleNext}
            handleResult={handleResult}
          />
        ) : status === "none" ? (
          <StartScreen handleStart={handleStart} />
        ) : (
          <Result
            score={score}
            total={data.length}
            handleRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
