import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const handleBlurInput = (key) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [key]: true,
    }));
  };

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");
  const passwordsAreInvalid =
    didEdit.password && enteredValue.password.trim().length < 6;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValue);
  };

  const handleInputChange = (key, value) => {
    setEnteredValue((prevEntered) => ({
      ...prevEntered,
      [key]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [key]: false,
    }));
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
          onBlur={() => handleBlurInput("email")}
          onChange={(e) => handleInputChange("email", e.target.value)}
          value={enteredValue.email}
          error={emailIsInvalid && <p>please enter a valid email</p>}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleBlurInput("password")}
          onChange={(e) => handleInputChange("password", e.target.value)}
          value={enteredValue.password}
          error={passwordsAreInvalid && <p>please enter a valid passwords</p>}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
