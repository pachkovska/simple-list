import React from 'react';


function AddButton(props) {

    return (
        <div className="addButton">
            <div>
                <button onClick={props.onClick}>ADD</button>
            </div>
        </div>
    );
}

export default AddButton;
