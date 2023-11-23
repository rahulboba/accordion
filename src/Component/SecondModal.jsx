import React, { useState, useRef, useEffect } from "react"


const SecondModal = ({onHideSecondModal}) => {
    // const secondModalElement = useRef(null);

    const [phone, setPhone] = useState('');

    
    const onKeyDown = (e) => {
        if (e.key === "Escape") {
            onHideSecondModal();    
        };
        // handleModalNavigation(e);
        };
    const handleInputChange = (e) => {
        setPhone(e.target.value);
    };


    //Focus set in modal
    // useEffect(() => {
    //     const addedElement = secondModalElement.current.querySelectorAll('input, button');
    //     addedElement[0].focus();
    // }, [onHideSecondModal]);


return (
    <>
    <div className='modaldailog'/>
    <div role='dailog' aria-label='User Details' aria-modal="true" className='modal-container' onKeyDown={(e)=> onKeyDown(e)}>
    
    <button className='closebtn' aria-label='Close' onClick={() => onHideSecondModal()} >X</button>
    <div>
    <input  className='phonenumber' value={phone} onChange={handleInputChange} placeholder="Phone number"/>    
    </div>
    </div>
    </>
  )
}

export default SecondModal
