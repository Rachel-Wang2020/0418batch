import { useState } from 'react'
export const InputTodo = ({setTodoList})=>{
    const [textContent, setTextContent] = useState('');
    const addTodo =() =>{
        if(!textContent.trim()){
            setTextContent('')
            return;
        }
        setTodoList((todoList)=>{
            return [...todoList, { content:textContent, isCompleted:false }]
        });
        setTextContent('');
    }
    return (
        <div>
            <input type='text' onChange={(e) =>setTextContent(e.target.value)}
            value ={textContent}
            />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}