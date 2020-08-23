import React from 'react';

const ToDoLilsts = (props) =>{

    return (
        <>
        <div className="todo_style">
           <i className="fa fa-times" aria-hidden="true"
           onClick={() =>{
               props.onSec(props.id);
           }}
           ></i>
            <li>{props.text}</li>
        </div>
        </>
    )
}

export default ToDoLilsts;