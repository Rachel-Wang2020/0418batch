import { TodoItem } from './TodoItem';

export const TodoList =({ todoLists, modTodo, delTodo}) => {
    return (
        <ul>
            {todoLists.map(({ content, isCompleted }, index) =>{
                return(
                <TodoItem 
                key ={`${content}-${index}`}
                content = {content}
                isCompleted ={isCompleted}
                index={index}
                modTodo={modTodo}
                delTodo={delTodo} />
                );    
            })}
        </ul>
    )
}