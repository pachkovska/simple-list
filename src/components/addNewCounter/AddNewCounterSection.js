import React, {useEffect, useState} from "react";
import InputField from '../InputField';
import AddButton from './AddButton';

function AddNewCounterSection (props)  {

    const [counterValues, setCounterValues] = useState({})

    const handleInputChange = (ev) => {
        const {name, value} = ev.target;
        setCounterValues({...counterValues, [name]: value});
    }

    const onAddButtonClick = () => {
        props.onAddButtonClick(counterValues);
        setCounterValues({});
    }

    return (
        <div className={"addNewCounterSection"}>
            <InputField
                className={"addCount"}
                onChange={(ev) => handleInputChange(ev)}
                name={"count"}
                placeholder={0}
                value={counterValues.count || ''}
            />
            <InputField
                className={"addName"}
                onChange={(ev) => handleInputChange(ev)}
                name={"stockName"}
                placeholder="Stock Name..."
                value={counterValues.stockName || ''}
            />
            <AddButton
                onClick={onAddButtonClick}
            />
        </div>
    )
}

export default AddNewCounterSection;