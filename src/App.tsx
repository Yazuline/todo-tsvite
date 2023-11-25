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
  const [todos, setTodos]= useState<Todo[]>(initialTodos);
  const addTodo=(text: string) =>{
    const newTodo={
      text,
      complate: false,
    };
    setTodos([...todos, newTodo]);
  }

  const toogleTodo=(selectedTodo:Todo) => 
    {
       setTodos(prevTodo=>{
        return prevTodo.map(todo=>{
          if(todo.text===selectedTodo.text){
            return {
            ...todo,
              complate:!todo.complate,
            }
          }
          return todo;
        })
       })
  }

  const removeTodo=() => {
    setTodos(prevTodo=>{
      return prevTodo.filter(todo=>!todo.complate);
    })
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
              checked={todo.complate} id='todo'
              onChange={()=>toogleTodo(todo)}/>
              {todo.text}
          </label>
          <button type='button' className='contrast' onClick={()=>removeTodo(todo)}>remover</button>
        </article>

      )
      )
     }
     </div>
     </div>
);
}

export default App