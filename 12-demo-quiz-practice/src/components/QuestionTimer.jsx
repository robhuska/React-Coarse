import { useEffect, useState, useContext } from 'react';
import { QuizContext } from '../store/QuizContextProvider';

export default function QuestionTimer({ timeout = 10000, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const questionTimer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(questionTimer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  );
}
