import React, { useState } from "react";
import styles from '../../styles.module.css'


export const Form = ({addMessage}) => {
    const [text, setText] = useState('');

    const handleText = (ev) => {
        ev.preventDefault();
        addMessage({
            text,
            author: 'User',
        });
        setText('');
    };

    return (
        <form onSubmit={handleText}>
            <input className={styles.input} type="text" value={text} placeholder="Введите сообщение" onChange={ev => setText(ev.target.value)}/>
            <button type="submit">Отправить</button>
        </form>
    );
}; 