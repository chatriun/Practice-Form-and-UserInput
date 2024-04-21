import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import Input from "./Input";
import useInput from "../hook/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleBlurInput: handleBlurEmail,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleBlurInput: handleBlurPassword,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>StateLogin</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleBlurEmail}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && <p>please enter a valid email</p>}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handleBlurPassword}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && <p>please enter a valid passwords</p>}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
