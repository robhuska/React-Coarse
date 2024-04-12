import { useEffect, useState } from 'react';

export default function ModalProgress({ maxTime }) {
  const [remainingTime, setRemainingTime] = useState(maxTime);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('INTERVAL');
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log('Clean up INTERVAL');
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={maxTime} />;
}
