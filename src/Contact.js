import React, { useState } from 'react'



const Contact = () =>{

    const [data, setData]= useState({
        fullname:"",
        phone:"",
        email:"",
        messages:"",

    })

    const InputEvent =  (event) =>{
      const {name, value} = event.target;
      setData((preval)=>{
          return{
              ...preval,
              [name]: value,
          }
      })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`${data.fullname}`);
    };
    
    return(
        <>
          <div className="my-5">
              <h1 className="text-center">Contact US</h1>
          </div> 
          <div className="container contact-div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label for="text" className="form-label">Full Name</label>
                    <input type="text" className="form-control"  name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                    </div>
                    <div className="mb-3">
                    <label for="text" className="form-label">Phone</label>
                    <input type="number" className="form-control"  name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number" />
                    </div>
                    <div className="mb-3">
                    <label for="text" className="form-label">Email address</label>
                    <input type="email" className="form-control"  name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                    <label for="text" className="form-label">Messages</label>
                    <textarea className="form-control"  rows="5"  name="messages" value={data.messages} onChange={InputEvent}></textarea>
                    </div>
                    <div className="col-12">
                         <button className="btn btn-outline-primary" type="submit">Submit form</button>
                   </div>
                </form>
                </div>
            </div>
          </div>
        </>
    );
};

export default Contact;