// import React, { useState } from "react";

// const FormInput = ({
//   inputType ,
//   inputValue,
//   handleChange,
// }) => {
//   // const [inputType] = useState(props.type);
//   // const [inputValue, setInputValue] = useState("");

//   // function handleChange(event) {
//   //   setInputValue(event.target.value);
//   //   if (props.onChange) props.onChange(inputValue);
//   // }
//   // console.log("inputValue:" + inputValue);
//   return (
//     <>
//       <input
//         type={inputType}
//         value={inputValue}
//         name="input-form"
//         onChange={handleChange}
//         class="inputclass"
//       />
//     </>
//   );
// };
// export default FormInput;

import React  from "react";

const FormInput = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default FormInput;