import React, {useState, useEffect} from "react";
import SingleCounter from "./singleCounterElements/SingleCounter";
import AllCountersActionButton from "../AllCountersActionButton";

function FullCounterList(props) {

    const [resetAllButtonState, setResetAllButtonState] = useState(false);

    const deleteItem = (index) => {
        let newList = props.listToDisplay;
        newList.splice(index, 1);
        props.updateCounterList(newList);
    }

    const handleStockChange = (n, index) => {
        let newList = props.listToDisplay;
        const amountChangeHandled = Number(newList[index].count) + +n;
        const getStockName = newList[index].stockName;
        newList.splice(index, 1, {count: amountChangeHandled, stockName: getStockName});
        props.updateCounterList(newList);
    }

    const resetSingleCounter = (index) => {
        let newList = props.listToDisplay;
        const getStockName = newList[index].stockName;
        newList.splice(index, 1, {count: 0, stockName: getStockName});
        props.updateCounterList(newList);
    }


    const handleAllCountersDelete = () => {
        let newList = [];
        props.updateCounterList(newList);
    }

    const handleAllCountersReset = () => {
        let newList = props.listToDisplay;
        setResetAllButtonState(!resetAllButtonState);
        newList.map((el, index) => resetSingleCounter(index));

    }

    useEffect(() => {
        if(props.listToDisplay.every(el => el.count ===0) && resetAllButtonState) {
            setResetAllButtonState(!resetAllButtonState);
        }
    }, [resetAllButtonState]);

    return (
        <div className="allCountersSection">
            <div className="counterList">
                {
                    props.listToDisplay &&
                    props.listToDisplay.map((el, index) => (
                        <SingleCounter
                            deleteItem={() => deleteItem(index)}
                            index={index}
                            count={el.count}
                            stockName={el.stockName}
                            handleStockChange={(n) => handleStockChange(n, index)}
                            resetSingleCounter={() => resetSingleCounter(index)}
                            listToDisplay={props.listToDisplay}
                            resetAllButtonState={resetAllButtonState}
                        />
                    ))
                }
            </div>
            <AllCountersActionButton
                buttonName={"RESET ALL"}
                handleAction={handleAllCountersReset}
                className={"allCountersActionButton--resetAll"}
            />
            <AllCountersActionButton
                buttonName={"DELETE ALL"}
                handleAction={handleAllCountersDelete}
                className={"allCountersActionButton--deleteAll"}
            />
        </div>
    )
}

export default FullCounterList;