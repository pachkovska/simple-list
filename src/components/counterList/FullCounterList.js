import React, { useState } from "react";
import SingleCounter from "./singleCounterElements/SingleCounter";

function FullCounterList(props) {

    const handleStockChange = (n) => {
        props.handleStockChange(n);
    }

    return (
        <div className="itemList">
            {
                props.listToDisplay &&
                props.listToDisplay.map((el, index) => (
                    <SingleCounter
                        deleteItem={props.deleteItem}
                        index={index}
                        count={el.count}
                        stockName={el.stockName}
                        handleStockChange={(n) => handleStockChange(n)}
                    />
                ))
            }
        </div>
    )
}

export default FullCounterList;