import quizCompleteImg from '../assets/quiz-complete.png';
import { useContext } from 'react';
import { QuizContext } from '../store/QuizContextProvider';

export default function Summary() {
  const { userAnswers, questions } = useContext(QuizContext);

  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const incorrectAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Complete" />
      <h2>Quiz complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = '';
          if (answer === null) {
            cssClass = 'skipped';
          } else if (answer === questions[index].answers[0]) {
            cssClass = 'correct';
          } else {
            cssClass = 'wrong';
          }
          return (
            <li key={questions[index].id}>
              <h3>{index + 1}</h3>
              <p className="question-text">{questions[index].text}</p>
              <p className={`user-answer ${cssClass}`}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
