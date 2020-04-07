import React, {useState} from 'react';
import './App.css';
import AddNewCounterSection from "./components/addNewCounter/AddNewCounterSection";
import FullCounterList from './components/counterList/FullCounterList';

function App() {

    const [listToDisplay, setListToDisplay] = useState([]);

    const addItemToList = (counterValues) => {
        setListToDisplay([...listToDisplay, counterValues]);
    }

    const deleteItem = (index) => {
        const newList = listToDisplay;
        console.log(newList[index]);
        newList.splice(index, 1);
        setListToDisplay([...newList]);
    }

    const handleStockChange = (index, n) => {
        console.log(listToDisplay[index]);
        const amountChangeHandled = listToDisplay[index].count + n;
        const getStockName = listToDisplay[index].stockName;
        const newList = listToDisplay;
        newList.splice(index, 1, {[getStockName]: amountChangeHandled})
        setListToDisplay([...newList]);
    }

    return (
        <div className="App">
            <FullCounterList
                listToDisplay={listToDisplay}
                deleteItem={deleteItem}
                handleStockChange={handleStockChange}
            />
            <AddNewCounterSection
                onAddButtonClick={addItemToList}
            />
            {/*<div className="itemList">*/}
            {/*    {*/}
            {/*        listToDisplay &&*/}
            {/*        listToDisplay.map((el, index) => (*/}
            {/*            <div>*/}
            {/*                <span>{el.count} </span>*/}
            {/*                <span>{el.stockName} </span>*/}
            {/*                <button key={el.stockName} onClick={() => deleteItem(index)}>DELETE</button>*/}
            {/*            </div>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
