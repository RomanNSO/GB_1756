import React, {Fragment} from 'react';
import {Button} from './components/Button/Button';
import {Input} from './components/Input/Input';
import style from './App.module.css';

const name = 'Geekbrains'

function App() {
  return (
    <Fragment>
      <h2 className={style.header}>Hello Geekbrains</h2>
      <Input name={name}/>
      <Button name={name}/>
    </Fragment>
  ) 
}

export default App;
