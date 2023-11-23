import React, { useEffect, useRef, useState } from 'react';
import Form from './Form';
import Modal from './Modal';



const MyAccordion = () => {
    const [showFirst, setShowFirst] = useState(false); // First accordion show/hide 
    const [showSecond, setShowSecond] = useState(false); // Second accordion show/hide
    const [showThird, setShowThird] = useState(false); // Third accordion show/hide
    const [enable, setEnable] = useState(false); // show/hide condition for 2nd accordion
    const [newEnable, setNewEnable] = useState(false);  // show/hide condition for 3rd accordion
    const [expanded, setExpanded] = useState(false); // aria Expand/Collapse
    const [openModal, setOpenModal] = useState(true);

    
    const handleClick = (index) => {
        // Accordian expand/collase hide/show
        if (index === 0) {  
            setShowFirst(!showFirst);
            setExpanded(!expanded);
        }

        if (index === 1) {  
            setShowSecond(!showSecond);
            setEnable(true);
            setExpanded(!expanded);
        }

        if (index === 2) {  
            setShowThird(!showThird);
            setExpanded(!expanded);
            setNewEnable(true);
        }
    };

    // Submit button
    const onClickSubmit = (index) => {  
        if (index === 1) {  
            setShowSecond(true);
            setShowFirst(false);
        }

        if (index === 2) {  
            setEnable(true);
            setShowThird(true);
            setShowSecond(false);
        }
    };

    const onClickReset = () => {
        setShowThird(false);
        setNewEnable(false);
        setShowSecond(false);
        setEnable(false);
        setShowFirst(false);
    };

    const accordionFocus = useRef(null);    //First accordion close and focus shift to second accordion
    const thirdAccordionFocus = useRef(null);   //Second accordion close and focus shift to third accordion
    const reset = useRef(null);
        useEffect(() => {
            if (showSecond) {
                accordionFocus.current.focus();
            };
            if (showThird) {
                thirdAccordionFocus.current.focus();
            };
            
        },[showSecond,showThird]);

        useEffect(() => {
            if(!showThird && !newEnable) {
                reset.current.focus();
            }
        }, [showThird,newEnable])

        //On click Modal
        const onClickOpenModal= ()=>{
            setOpenModal(false);
            
        }
        //Close Modal
        const modalReturnFocus= useRef(null);
        
        const onHideModal= ()=>{
            setOpenModal(true);
            
            modalReturnFocus.current.focus();
            
        };


    return (
        <>
            <div class="container">

            {/* 1st Accordion */}
            <div>
                <button className='accordionbtn' aria-expanded={showFirst ? 'true' : 'false'} onClick={() => handleClick(0)} ref={reset} >1st Accordion</button> 
                <h2 hidden={!showFirst}>User Info</h2>

                <div hidden={!showFirst}>
                    <Form onClickSubmit={onClickSubmit} index={1} />    {/* After clicking on submit button then and then only next accordion enable */}
                </div>
            </div>

            {/* 2nd Accordion */}
            <div>
                <button className='accordionbtn' aria-expanded={showSecond ? 'true' : 'false'}  onClick={() => handleClick(1)} disabled={!showSecond && !enable} ref={accordionFocus} >2nd Accordion</button>

                <h2 hidden={!showSecond}>Modal Dailog</h2>
                <p hidden={!showSecond}>Please click on open modal button!</p>
                    <button className='modalbtn' hidden={!showSecond} onClick={onClickOpenModal} ref= {modalReturnFocus} >Modal</button>
                    <button className='submitbtn' hidden={!showSecond} onClick={() => onClickSubmit(2)} >Submit</button>
            </div>
            
            {/* Modal Dailoge */}
            <div class='modal' hidden={openModal}>
            <Modal onHideModal={onHideModal} />
            </div>

            {/* 3rd accordion */}
            <div>
                <button className='accordionbtn' aria-expanded={showThird ? 'true' : 'false'} onClick={() => handleClick(2)} disabled={!showThird && !newEnable} ref={thirdAccordionFocus}>3rd Accordion</button>
                
                <h3 hidden={!showThird}>Congrats!</h3>
                <p hidden={!showThird}>You are done now!</p>
                <button className='resetbtn' hidden={!showThird} onClick={onClickReset}>Reset</button>
            </div>
            
            </div>
         </>
    );
};

export default MyAccordion;