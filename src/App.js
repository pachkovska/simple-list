import React, {useState} from 'react';
import './App.css';

function App() {

    const [itemInputs, setItemInputs] = useState({});

    const setStateForCurrentItem = (e) => {
        const {name, value} = e.target;
        setItemInputs({...itemInputs, [name]: value});
    }

    const [listToDisplay, setListToDisplay] = useState([]);

    const addItemToList = () => {
        setListToDisplay([...listToDisplay, itemInputs]);
        setItemInputs({itemCount: '', itemName: ''});
    }

    const deleteItem = (index) => {
        console.log(index);
        setListToDisplay([...listToDisplay].splice(index, 1));
    }

    return (
        <div className="App">
            <div className="itemList">
                {
                    listToDisplay &&
                    listToDisplay.map((el, i) => (
                        <div>
                            <span>{el.itemCount} </span>
                            <span>{el.itemName} </span>
                            <button key={el.itemName} onClick={() => deleteItem(i)}>DELETE</button>
                        </div>
                    ))
                }
            </div>
            <input type="text" name="itemCount" value={itemInputs.itemCount} placeholder="0"
                   onChange={setStateForCurrentItem}></input>
            <input type="text" name="itemName" value={itemInputs.itemName} placeholder="Item Name..."
                   onChange={setStateForCurrentItem}></input>
            <button className="itemsInput-addButton" onClick={addItemToList}>ADD</button>
        </div>
    );
}

export default App;
