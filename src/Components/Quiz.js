import React, { useContext, } from "react";
import Question from "./Question";
import { QuizContext } from "../context/quiz";


const Quiz = () => {
  const [quizState, dispatch]= useContext(QuizContext)
  console.log("quizState" ,quizState)
  
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results" > 
        <div className="congratulations">Congratulations</div>
        <div className="results-info">
          <div>
            You have Completed the Quiz.
          </div>
          <div>
            You have got {quizState.correctAnswersCount} of {" "} {quizState.questions.length}
            </div>
        </div>
        <div className="next-button" onClick={()=>dispatch({type:"RESTART" })}>Restart</div>
        </div>
      )}
      {!quizState.showResults && (
      <div>
        <div className="score">
        Question {quizState.currentQuestionIndex + 1}/
        {quizState.questions.length}
        </div>
        <Question />
        <div
          className="next-button"
          onClick={() => dispatch({ type: "NEXT-QUESTION" })}
        >
          Next Question
        </div>
      </div>
      )}
    </div>
  );
};

export default Quiz;
