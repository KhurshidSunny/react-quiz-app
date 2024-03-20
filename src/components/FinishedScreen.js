function FinishedScreen({ points, maxPossiblePoints, highscore }) {
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
    </>
  );
}

export default FinishedScreen;
