import React from "react";

function SingleCounterActionButton(props) {
    return (
        <div className={props.className}>
              <button key={props.stockName} onClick={props.handleAction}>{props.buttonName}</button>
        </div>
    )
}

export default SingleCounterActionButton;