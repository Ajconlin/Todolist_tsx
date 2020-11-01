import React, { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';
import { Todo } from './Models/todo.module';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text: text}
    ])
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }  

    return (
      <div className="App">

        <NewTodo onAddTodo={todoAddHandler} />
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />

      </div>
    );
}

export default App;
