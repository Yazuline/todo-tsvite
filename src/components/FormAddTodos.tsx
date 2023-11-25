import { ChangeEvent, useState } from "react";
interface Props{
    addTodo:(text:string)=>void;
}
const FormAddTodos = ({addTodo}:Props) => {
    const[text, setText]=useState("");

const handelChange=(e:ChangeEvent<HTMLInputElement>)=> {
    setText(e.target.value);
}


const handelSubmit=(e: ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const trimmedText=text.trim();
    if(!trimmedText) return
    addTodo(trimmedText);
    setText("");

};

  return (
    <form onSubmit={handelSubmit}>
    <label htmlFor="todo">Todo
    <input type="text" name="" id="todo" placeholder="Write your Activity" 
    value={text}
    onChange={handelChange  }/>
    <button type="submit">Add Todo</button>

    </label>
   </form>
  );
}
export default FormAddTodos