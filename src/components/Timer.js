import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, secondsRemain } = useQuiz();
  const minutes = Math.floor(secondsRemain / 60);
  const seconds = secondsRemain % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {minutes < 10 ? 0 : ""}
      {minutes}:{seconds < 10 ? 0 : ""}
      {seconds}
    </div>
  );
}

export default Timer;
