import React, {KeyboardEventHandler, SyntheticEvent, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import contextMenu = Simulate.contextMenu;

const StopTheWar = () => {
    const style = {backgroundColor: 'red'}
    const [list, setList] = useState<string[]>([])
    const [inputText, setInputText] = useState('')

    function changeInputValue(e: SyntheticEvent<HTMLInputElement>) {
        setInputText(e.currentTarget.value)
    }

    function addToList() {
        setList([...list, inputText])
        setInputText('')
    }


    return (
        <div style={style}>
            <input type="text" value={inputText} onChange={changeInputValue} onKeyDown={(e) => {
                e.key === 'Enter' && addToList()
            }}/>
            <button onClick={addToList}>stop the war right now!</button>
            <ul>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

export default StopTheWar;