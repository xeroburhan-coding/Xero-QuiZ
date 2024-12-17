const StartScreen = ({ handleStart }) => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Start a New Quiz!</h1>
      <button
        className="text-center text-white font-semibold rounded-lg bg-indigo-600 px-6 py-2 my-4 w-full"
        onClick={handleStart}
      >
        Start Quiz
      </button>
    </>
  );
};

export default StartScreen;
