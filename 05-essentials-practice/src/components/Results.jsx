import { formatter, calculateInvestmentResults } from '../util/investment';

export default function Results({ investmentData }) {
  const resultsData = calculateInvestmentResults(investmentData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((row) => {
          const totalInterest =
            row.valueEndOfYear -
            row.annualInvestment * row.year -
            investmentData.initialInvestment;
          const investmentCapital = row.valueEndOfYear - totalInterest;
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investmentCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
