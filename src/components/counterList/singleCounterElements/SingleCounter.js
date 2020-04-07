import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import InputField from "../../InputField";
import IncrementButton from "./IncrementButton";
import _ from 'lodash';

function SingleCounter(props) {

    // const [stockAmount, setStockAmount] = useState(0);

    const [rangeValues, setRangeValue] = useState({});

    const [error, setErrorState] = useState({
        errorState: false,
        errorText: '',
    });

    const handleInputChange = (ev) => {
        const {name, value} = ev.target;
        if (((value < 0 || value > 20) || isNaN(value)) && value !== '') {
            alert('Sorry non-integers or numbers outside of advised range are not allowed') && setRangeValue({...rangeValues, [name]: ''});
        } else {
            setRangeValue({...rangeValues, [name]: +value});
        }
    }

    const handleStockChange = (n) => {
        props.handleStockChange(n);
    }

    return (
        <div className="counterList-single">
                <InputField
                    className={"fromValue"}
                    onChange={(ev) => handleInputChange(ev)}
                    name={"fromValue"}
                    placeholder={0}
                    value={rangeValues.fromValue || ''}
                />
                 <span>{props.count} </span>
                 <span>{props.stockName} </span>
                 <DeleteButton
                    stockName={props.stockName}
                    index={props.index}
                    deleteItem={props.deleteItem}
                 />
                 <InputField
                     className={"toValue"}
                     onChange={(ev) => handleInputChange(ev)}
                     name={"toValue"}
                     placeholder={0}
                     value={rangeValues.toValue || ''}
                 />
            {error.errorState
                ? <div className="errorMessage">{error.errorText}</div>
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