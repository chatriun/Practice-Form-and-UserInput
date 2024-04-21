import { useState } from "react";

const useInput = (initValue, validateFn) => {
  const [enteredValue, setEnteredValue] = useState(initValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validateFn(enteredValue)

  const handleBlurInput = () => {
    setDidEdit(true);
  };

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  };

  return {
    value: enteredValue,
    handleBlurInput,
    handleInputChange,
    hasError: didEdit && !valueIsValid,
  };
}

export default useInput;