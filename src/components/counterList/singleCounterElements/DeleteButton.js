import React, { useState } from "react";

function DeleteButton(props) {
    return (
        <div className="deleteButton">
              <button key={props.stockName} onClick={props.deleteItem}>DELETE</button>
        </div>
    )
}

export default DeleteButton;