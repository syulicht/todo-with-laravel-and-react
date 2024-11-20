import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { context } from './app';

const TodoList = () => {
    const {fetchData, list} = useContext(context);
    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
        {list.map(item => {
            return (<div>{item.title}</div>)
        })}
    </div>
  )
}

export default TodoList
