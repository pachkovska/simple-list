import React from "react";


function InputField(props) {

    return (
        <div className={props.className}>
            <input type="text" name={props.name} value={props.value} index={props.index} onChange={(ev) => props.onChange(ev)}
                   placeholder={props.placeholder}></input>
        </div>
    )
}

export default InputField;