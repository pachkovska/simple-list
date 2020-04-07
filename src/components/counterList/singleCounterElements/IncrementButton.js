import React from 'react';


function IncrementButton(props) {

    const onButtonClick = () => {
        props.incrementNumber();
    }

    return (
        <div className="IncrementButtons-single">
                <button onClick={onButtonClick}>{props.step}</button>
        </div>
    );
}

export default IncrementButton;
