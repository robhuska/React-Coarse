import { useContext } from 'react';
import { QuizContext } from '../store/QuizContextProvider';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import { useState } from 'react';

export default function Question() {
  const { activeQuestionIndex, questions, skipAnswer, selectAnswer } =
    useContext(QuizContext);

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  let timer = 30000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: questions[activeQuestionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        selectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        mode={answerState}
        onTimeout={answer.selectedAnswer === '' ? skipAnswer : null}
      />
      <h2>{questions[activeQuestionIndex].text}</h2>
      <Answers
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
