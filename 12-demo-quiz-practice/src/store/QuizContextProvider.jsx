import { createContext, useState, useCallback } from 'react';
import QUESTIONS from '../questions';

export const QuizContext = createContext({
  questions: QUESTIONS,
  activeQuestionIndex: 0,
  userAnswers: [],
  selectAnswer: () => {},
  skipAnswer: () => {},
});

export default function QuizContextProvider({ children }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const ctxValue = {
    questions: QUESTIONS,
    activeQuestionIndex: activeQuestionIndex,
    userAnswers: userAnswers,
    selectAnswer: handleSelectAnswer,
    skipAnswer: handleSkipAnswer,
  };
  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
