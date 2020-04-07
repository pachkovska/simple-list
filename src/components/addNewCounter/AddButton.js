import React from 'react';


function AddButton(props) {

    return (
        <div className="addButton">
                <button onClick={props.onClick}>ADD</button>
        </div>
    );
}

export default AddButton;
