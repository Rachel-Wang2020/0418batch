export const TodoItem = ({ content, isCompleted, delTodo, modTodo, index }) =>{
    return (
        <li className="one-todo">
            <span 
            style ={{textDecoration: isCompleted ? 'line-through': 'none'}}
            onDoubleClick={()=>{
                modTodo(index);
            }}
            >
                {content}
            </span>
            <button onClick={()=>{
                delTodo(index);
            }}>
                Delete
            </button>
        </li>
    )
}