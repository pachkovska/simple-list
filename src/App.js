import React, {useState} from 'react';
import './App.css';
import AddNewCounterSection from "./components/addNewCounter/AddNewCounterSection";
import FullCounterList from './components/counterList/FullCounterList';

function App() {

    const [listToDisplay, setListToDisplay] = useState([]);

    const addItemToList = (counterValues) => {
        setListToDisplay([...listToDisplay, counterValues]);
    }

    const updateCounterList = (newList) => {
        setListToDisplay([...newList]);
    }

    return (
        <div className="App">
            <div className="appHeader">Your Stock Counter App On A Single Page</div>
            <FullCounterList
                listToDisplay={listToDisplay}
                updateCounterList={updateCounterList}
                handleStockChange={updateCounterList}
            />
            <AddNewCounterSection
                onAddButtonClick={addItemToList}
            />
        </div>
    );
}

export default App;
