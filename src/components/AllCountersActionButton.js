import React from "react";

function AllCountersActionButton(props) {
    return (
        <div className={props.className}>
            <button onClick={props.handleAction}>{props.buttonName}</button>
        </div>
    )
}

export default AllCountersActionButton;