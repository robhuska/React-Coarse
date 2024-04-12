import { useState } from 'react';

export default function UserInput({ onChange, investmentData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={investmentData.initialInvestment}
            onChange={(e) => onChange('initialInvestment', e.target.value)}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={investmentData.annualInvestment}
            onChange={(e) => onChange('annualInvestment', e.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={investmentData.expectedReturn}
            onChange={(e) => onChange('expectedReturn', e.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={investmentData.duration}
            onChange={(e) => onChange('duration', e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
