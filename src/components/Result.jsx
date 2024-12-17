const Result = ({ score, total, handleRestart }) => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">
        Your Score is {score}/{total}
      </h1>
      <button
        className="text-center text-white font-semibold rounded-lg bg-amber-600 px-6 py-2 my-4 w-full"
        onClick={handleRestart}
      >
        Restart
      </button>
    </>
  );
};

export default Result;
