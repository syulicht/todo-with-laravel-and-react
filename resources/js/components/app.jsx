import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import TodoList from './TodoList';
import axios from 'axios';

export const context = createContext({
    fetchData:  async() => {
        const response = await axios.get('http://localhost:8000/todo-get');
        setList(response.data);
    },
    list : [],
    setList : () => {}

})

const App = () => {
  const [list, setList] = useState([]);

  return (
    <context.Provider value={{
        fetchData:  async() => {
                const response = await axios.get('http://localhost:8000/todo-get');
                setList(response.data);
            },
        list : list,
        setList : setList
    }}>
      <Form />
      <TodoList />
    </context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
