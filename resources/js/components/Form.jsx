import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { context } from './app';

const Form = () => {
    const {fetchData} = useContext(context);
    const submitHandle = async (e) => {
        e.preventDefault();
        const text = e.target.querySelector('input').value;
        await axios.post('http://localhost:8000/todo-create', {title: text});
        fetchData();
        e.target.querySelector('input').value = '';
    }
  return (
    <form onSubmit={(e) => submitHandle(e)}>
        <input type='text' />
        <button type='submit' >Submit</button>
    </form>
  )
}

export default Form
