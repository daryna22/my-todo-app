import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// Style
import style from './List.module.scss'
import ClearAll from "../ClearAll";


export default function ToDo(props) {
    const { list, onChangeList } = props;
    const [ input, setInput ] = useState()
    const inputItem = (e) => {
        setInput(e.target.value);
    }


    const addItem = () => {
        const newArray = [...list, input]
        onChangeList(newArray)
        clearInput()
    }
    const clearItems = () => {
        const clearArray = []
        onChangeList(clearArray)
    }
    const clearInput = () => {
        document.getElementById("add").value = ' '
    }

    const onEnter = (event) => {
        if (event.key ==='Enter') {
            addItem()
            event.preventDefault()
            clearInput()
        }
    }
    const Items = list.map((item) => {
        return <li className={style.items} key={uuidv4()}>{item}</li>
    })
    return (
        <div>
            <form>
                <input id="add" type="text" placeholder="Name..." maxLength="50" onChange={inputItem} className={style.input} onKeyPress={onEnter}/>
                <button type="button" onClick={addItem} className={style.add}>Add item</button>
            </form>
            <ul className={style.tasks}>
                {Items}
            </ul>
            <div className={style.clear_button}>
            <ClearAll clearItems={clearItems}/>
            </div>
        </div>
    )
}