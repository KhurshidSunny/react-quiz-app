import { useQuiz } from "../contexts/QuizContext";

function FinishedScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  return (
    <>
      <p className="result">
        {" "}
        You scored
        <strong> {points}</strong> out of{" "}
        <strong>
          {maxPossiblePoints} ({Math.ceil((points / maxPossiblePoints) * 100)}%)
        </strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
