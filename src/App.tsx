import { useState } from 'react';
import FormAddTodos from './components/FormAddTodos';

interface Todo {
  text: string;
  complate:boolean;
}

const initialTodos =[
  {
    text: 'Lear React',
    complate: false,
  },

  {
    text: 'Lear Vue',
    complate: false,
  },

  {
    text: 'Lear Angular',
    complate: false,
  },
  {
    text: 'Lear React Native',
    complate: true,
  },
  {
    text: 'Lear Node.js',
    complate: true,
  },
  
  

]

const App = () => {
  const [todos, seTodos]= useState<Todo[]>(initialTodos);
  const addTodo=(text: string) =>{
    const newTodo={
      text,
      complate: false,
    };
    seTodos([...todos, newTodo]);
  }
  return (
    <div  className="container" >
      <h1>Todo</h1>
      <FormAddTodos addTodo={addTodo}/>
      <div>
       {
      todos.map((todo)=>(
        <article key={todo.text}>
          <label htmlFor="todo">
            <input type="checkbox"  
              checked={todo.complate} id='todo'/>
              {todo.text}
          </label>
        </article>

      )
      )
     }
     </div>
     </div>
);
}

export default App