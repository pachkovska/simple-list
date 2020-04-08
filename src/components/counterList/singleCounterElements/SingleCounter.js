import React, {useState, useEffect} from "react";
import SingleCounterActionButton from "./SingleCounterActionButton";
import InputField from "../../InputField";
import IncrementButton from "./IncrementButton";
import _ from 'lodash';

function SingleCounter(props) {

    const [rangeValues, setRangeValue] = useState({});

    const [error, setErrorState] = useState({
        errorState: false,
        errorText: '',
    });

    const handleInputChange = (ev) => {
        const {name, value} = ev.target;
        if (((value < 0 || value > 20) || isNaN(value)) && value !== '') {
            alert('Sorry non-integers or numbers outside of advised range are not allowed') && setRangeValue({
                ...rangeValues,
                [name]: ''
            });
        } else {
            setRangeValue({...rangeValues, [name]: +value});
        }
    }

    useEffect(() => {
        if (rangeValues.fromValue > rangeValues.toValue && rangeValues.fromValue !== 0 && rangeValues.toValue !== 0) {
            setErrorState({
                errorState: true,
                errorText: 'Sorry,  begin incrementing value can not be bigger than end incrementing value.',
            });
        } else {
            setErrorState({
                errorState: false,
                errorText: '',
            });
        }
    }, [rangeValues]);

    const handleStockChange = (n) => {
        props.handleStockChange(n);
    }

    const resetSingleCounter = (index) => {
        setRangeValue({});
        props.resetSingleCounter(index);
    }

    useEffect((index) => {
        resetSingleCounter(index);
        // setRangeValue({});
    }, [props.count])


    return (
        <div className="counterList-single">
            <InputField
                className={"fromValue"}
                onChange={(ev) => handleInputChange(ev)}
                name={"fromValue"}
                placeholder={0}
                value={rangeValues.fromValue || ''}
                index={props.index}
            />
            <div className={"stockCount"}>{props.count} </div>
            <div className={"stockName"}>{props.stockName} </div>
            <SingleCounterActionButton
                stockName={props.stockName}
                index={props.index}
                handleAction={resetSingleCounter}
                buttonName={"RESET"}
                className={"counterActionButton--reset"}
            />
            <SingleCounterActionButton
                stockName={props.stockName}
                index={props.index}
                handleAction={props.deleteItem}
                buttonName={"DELETE"}
                className={"counterActionButton--delete"}
            />
            <InputField
                className={"toValue"}
                onChange={(ev) => handleInputChange(ev)}
                name={"toValue"}
                placeholder={0}
                value={rangeValues.toValue || ''}
                index={props.index}
            />
            {error.errorState
                ? null
                // <div className="errorMessage">{error.errorText}</div>
                : rangeValues.fromValue && rangeValues.toValue
                    ? <>
                        <div className="incrementButtons">
                            {
                                _.range(rangeValues.fromValue, rangeValues.toValue + 1, 1).map(el => (
                                    <IncrementButton key={el} step={el}
                                                     incrementNumber={() => handleStockChange(el)}/>
                                ))
                            }
                        </div>
                        <div className="decrementButtons">
                            {
                                _.range(rangeValues.fromValue, rangeValues.toValue + 1, 1).map(el => (
                                    <IncrementButton key={el} step={-el}
                                                     incrementNumber={() => handleStockChange(-el)}/>
                                ))
                            }
                        </div>
                    </> : null
            }
        </div>
    )
}

export default SingleCounter;