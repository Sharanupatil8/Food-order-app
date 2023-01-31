import React from "react";

import classess from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classess.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
