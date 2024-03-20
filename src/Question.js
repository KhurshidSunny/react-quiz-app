import Options from "./components/Options";

function Question({ question, dispatch, answer, socre }) {
  return (
    <div>
      <h4>{question?.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
