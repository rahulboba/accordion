import React, { useState} from 'react'

const Form = ({onClickSubmit, index, formReset}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  const [showFirstName, setShowFirstName] = useState(false);  
  const [showlastName, setShowLastName] = useState(false);  


  const handleFirstNameChange = (e) => {  //Set edited value for 1st
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => { //Set edited value for 2nd
    setLastName(e.target.value);
  };


//To check first and/or Last name field is empty or not
  const onSubmit = (e) => {
    e.preventDefault();
    if(firstName.trim() === '') { 
      setShowFirstName(true);
    } else {
      setShowFirstName(false);
    };

    if(lastName.trim() === '') {  
      setShowLastName(true);
    } else {
      setShowLastName(false);
    };

    if (firstName.trim() !== '' && lastName.trim() !== '') {
      onClickSubmit(index);
    };
  };


  return (
    <form>

      <div>
        <label id='fname'>First Name: </label>
        <input value={firstName} onChange={handleFirstNameChange} autoComplete='given-name' type='text' aria-labelledby='fname' className='firstName' placeholder='Enter your first name' aria-required = "true" required/>
        <span className='errormsg' role='alert' hidden={!showFirstName} style={{ color: 'red' }}>Please fill first name field</span>
      </div>

      <div>
        <label id='lname'>Last Name: </label>
        <input value={lastName} onChange={handleLastNameChange} autoComplete='family-name' type='text' aria-labelledby='lname' className='lastName' placeholder='Enter your last name' aria-required = "true" required/>
        <span className='errormsg' role='alert' hidden={!showlastName} style={{ color: 'red' }}>Please fill last name field</span>  
      </div>
        <button type='submit' className='submitbtn' onClick={onSubmit}>Submit</button>

    </form>
  );
};

export default Form;