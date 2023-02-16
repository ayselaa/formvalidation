import React, { useState, useEffect } from "react";

const SimpleInput = (props) => {
  //validations for name input
  const [inputName, setInputName] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  //validations for email input
  const [inputEmail, setInputEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  //#region Check of Form Start
  const [formKecerlidiseSubmitOlsun, setformKecerlidiseSubmitOlsun] = useState(false);
  useEffect(() => {
    if (isValidName && isValidEmail) {
      setformKecerlidiseSubmitOlsun(true);
    } else {
      setformKecerlidiseSubmitOlsun(false);
    }
  }, [isValidName,isValidEmail ]);
  //#endregion Check of Form End
  inputEmail.includes('@');

  const changeInputEmail = (e) => {
    setInputEmail(e.target.value);

    if (inputEmail.trim() !== "") {
      setIsValidEmail(true);
    }
  };

  const changeInputName = (e) => {
    setInputName(e.target.value);

    if (inputName.trim() !== "") {
      setIsValidName(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setInputName("");
    setInputEmail("");

    if (inputName.trim() === "") {
      setIsValidName(false);
      setIsValidEmail(false);
      return;
    } else {
      setIsValidName(true);
      setIsValidEmail(true);
    }
  };
     //#region  Change Form-Control Class
  const changeClassesforValidationName = isValidName
    ? "form-control"
    : "form-control invalid";

  const changeClassesforValidationEmail = isValidEmail
    ? "form-control"
    : "form-control invalid";
     //#endregion 
 
     return (
    <form onSubmit={submitHandler}>
      
      <div className={changeClassesforValidationName}>
        <label htmlFor="name">Your Name</label>
        <input
          value={inputName}
          onChange={changeInputName}
          type="text"
          id="name"/>
        {!isValidName && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={changeClassesforValidationEmail}>
        <label htmlFor="name">Your E-Mail</label>
        <input
          value={inputEmail}
          onChange={changeInputEmail}
          type="email"
          id="email"/>
        {!isValidEmail && <p className="error-text">Email must not be empty.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formKecerlidiseSubmitOlsun}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
