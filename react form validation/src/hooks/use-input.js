import React from 'react'

const useInput = (validateValue) => {
    const [eneteredValue, setEnteredValue] = useState("");
    const [isValidName, setIsValidName] = useState(true);

    const valueIsValid = validateValue(eneteredValue);
}

export default useInput;
