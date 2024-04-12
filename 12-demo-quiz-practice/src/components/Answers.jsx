import { useContext, useRef } from 'react';
import { QuizContext } from '../store/QuizContextProvider';

export default function Answers({ answerState, onSelect, selectedAnswer }) {
  const { activeQuestionIndex, questions, userAnswers } =
    useContext(QuizContext);

  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...questions[activeQuestionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  // console.log(userAnswers[userAnswers.length - 1]);

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = '';

        if (isSelected) {
          if (answerState === 'answered') {
            cssClass = 'selected';
          }
          if (answerState === 'correct' || answerState === 'wrong') {
            cssClass = answerState;
          }
        }

        return (
          <li className="answer" key={answer}>
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
