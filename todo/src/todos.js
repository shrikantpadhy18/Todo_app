import React from 'react'
const Todos=({todos,deleteit })=>
{
    
    const todolist=todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                <span onClick={()=>{deleteit(todo.id)}} >{todo.content}</span>
                </div>
            )
        })
    ):(
        <p className="center">You have no todo's left,yay!</p>
    )
    return(
        <div className="todos collection">
        {todolist}
        </div>
    )
}

export default Todos