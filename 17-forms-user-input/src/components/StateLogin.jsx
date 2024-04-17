import { useState } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailIsInvalid,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordIsInvalid,
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Entered Email: ' + emailValue);
    console.log('Entered Password: ' + passwordValue);

    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }

    console.log('Submitted!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailIsInvalid && 'Please enter a valid email'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordIsInvalid && 'Invalid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
