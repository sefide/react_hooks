import React, { useState } from "react";

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);

  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const Inputs = () => {
  const maxLength = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLength);

  return (
    <div className="App">
      <h1>Hello {name.value} </h1>
      {/* ...name == value={name.value] onChange={name.onChange}  */}
      <input placeholder="Name" {...name}></input>
    </div>
  );
};

export default Inputs;
