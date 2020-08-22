import React from 'react'
const time = new Date().getFullYear();
const Footer = () =>{
    return(
        <>
            <footer className="bg-light text-center">
              <p>@ {time} Hadayet. All Rights Reserved | Terms and Condition</p>  
            </footer>
        </>
    )
}

export default Footer;