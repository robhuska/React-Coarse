import { useContext } from 'react';
import { QuizContext } from '../store/QuizContextProvider';
import Summary from './Summary';
import Question from './Question';

export default function Quiz({ children }) {
  const { activeQuestionIndex, questions } = useContext(QuizContext);
  const quizIsComplete = activeQuestionIndex === questions.length;

  if (quizIsComplete) {
    return <Summary />;
  }

  return (
    <section id="quiz">
      <Question key={activeQuestionIndex} />
    </section>
  );
}
