import React, { useState } from 'react'

import ToDoLilsts from './Todoitems'


const ToDo = () =>{

    const [InputList, setInptList] = useState("");

    const [Items, srtItems]= useState([]);

    const  ChangeVal = (event) => {
        setInptList(event.target.value)
    }

    const listofItems = () =>{
        srtItems((olditems)=>{
            return [...olditems, InputList]
        })
        setInptList("")
    };

    
    const deleteItems = (id) =>{
        console.log("dfffff")
        srtItems((olditems)=>{
            return olditems.filter((arryElm, index)=>{
                return index !== id;
            })
        })

     } 

    return(
        <>
        <div className ="container-fluid nav-bg">
           <div className="row">
           <div className ="col-6 mx-auto">
             <div className="center_div">
                 <h1>To Do List</h1>
                 <br/>
                 <input type="text" placeholder="Add a Items" value={InputList} onChange={ChangeVal} />
                 <button onClick={listofItems}>+</button>

                 <ol>
                    {/* <li>{InputList}</li> */}
                   { Items.map( (itemValue, index)=>{
                    return <ToDoLilsts 
                    key={index}
                    id={index}
                     text = {itemValue}
                     onSec={deleteItems}
                    />
                   })
                   }
                 </ol>
             </div>
           </div>
           </div>
           </div>

        </>
    );
};

export default ToDo;