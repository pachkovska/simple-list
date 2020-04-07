import React, { useState } from 'react';


function IncrementButton(props) {

    const [isClicked, setIsClicked] = useState(false);

    const onButtonClick = () => {
        setIsClicked(!isClicked);
        props.incrementNumber();
    }

    return (
        <div className="IncrementButton">
                <button onClick={onButtonClick}>{props.step}</button>
        </div>
    );
}

export default IncrementButton;
