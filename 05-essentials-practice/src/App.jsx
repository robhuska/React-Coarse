import { useState } from 'react';
import Results from './components/Results';
import UserInput from './components/UserInput';

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const dataIsValid = investmentData.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInvestmentData((prevInvestmentData) => {
      return {
        ...prevInvestmentData,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput onChange={handleChange} investmentData={investmentData} />
      {dataIsValid ? (
        <Results investmentData={investmentData} />
      ) : (
        <p className="center">Duration must be at least 1</p>
      )}
    </>
  );
}

export default App;
