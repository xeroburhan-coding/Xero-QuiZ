const QuestionCard = ({
  current,
  data,
  selectedOption,
  handleOption,
  handleNext,
  handleResult,
}) => {
  const questionData = data[current - 1];
  const correctAnswer = questionData.ans;

  return (
    <>
      <h1 className="mb-4 text-xl font-bold">
        Q{current} of {data.length}: {questionData.question}
      </h1>
      <div className="flex flex-col gap-2">
        {questionData.options.map((option, index) => {
          let buttonClass =
            "text-start rounded-lg text-lg border-2 border-gray-100 px-6 py-2";

          if (selectedOption) {
            if (option === correctAnswer) {
              buttonClass =
                "text-start rounded-lg text-lg bg-green-200 px-6 py-2";
            } else if (option === selectedOption) {
              buttonClass =
                "text-start rounded-lg text-lg bg-red-200 px-6 py-2";
            }
          }

          return (
            <button
              onClick={() => handleOption(option)}
              key={index}
              className={buttonClass}
            >
              {option}
            </button>
          );
        })}
        {current === data.length ? (
          <button
            className="text-center text-white font-semibold rounded-lg bg-green-600 px-6 py-2 my-4"
            onClick={handleResult}
          >
            Show Result
          </button>
        ) : (
          <button
            className="text-center text-white font-semibold rounded-lg bg-indigo-600 px-6 py-2 my-4"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default QuestionCard;
