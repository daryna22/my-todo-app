import React from 'react';

// Style
import style from './ClearAll.module.scss'

export default function ClearAll(props) {
    const { clearItems } = props;
    return (
        <button className={style.clear} onClick={clearItems}>
            Clear Items
        </button>
    );
}