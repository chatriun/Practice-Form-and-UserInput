import { useState } from "react";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleBlurInput("email")}
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={enteredValue.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleInputChange("password", e.target.value)}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
