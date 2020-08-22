import React from 'react'
import  Sdata from '../src/Demo/Sdata';
import Cards from './Card'

const Service = () =>{
    return(
        <>
           <div className="my-5">
                <h1 className="text-center">Our Service</h1>
           </div>
           <div className ="container-fluid nav-bg">
           <div className="row">
           <div className ="col-10 mx-auto">
            <div className="row gy-4">
                {
                    Sdata.map((val, inde)=>{
                        return <Cards key={inde}
                            imgsrc={val.imgsrc}
                            title={val.title}
                        />
                    })
                }
            </div>
           </div>
           </div>
           </div>
        </>
    );
};

export default Service;