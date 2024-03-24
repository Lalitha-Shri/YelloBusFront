//Home page is the base Url page which displays the details about contact explore more and mail details 
import React, { useEffect } from 'react'
import contact from "../images/contact.png";
import about from "../images/about.png";
import header from "../images/header.png";
import mail from "../images/mail.png";
import image from "../images/image.png";
import { useLoaderData, useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  const navigate=useNavigate();
   const btn ={backgroundColor: '	#c0c0c0'};
  const packages=(e)=>{
    e.preventDefault();
   
    navigate("/packages")
  }
  const aboutUs1=(e)=>{
    e.preventDefault();
    navigate("/aboutUs")
  }


  
  return (
    
    <section className='gradient_background'>
      <div className='ms-5'>
      <div className='ms-2'>
    <img
            src={header}
            width="1400px"
            height="400px"
            className='mt-5'
            alt=""
            style={{cursor: "pointer"}}
            onClick={(e)=>packages(e)}
          />
          </div>
          </div>
          <div className='ms-5 text-center'  >
          <div className='ms-5' >
        <img src={contact} width="100" height="auto" className="offerAll " id="images" title='toll free:1800-0988-7009'></img>
        <img src={about} width="100" height="auto" className="offerAll ms-5" id="about" onClick={(e)=>aboutUs1(e)}></img>
        <img src={mail} width="100" height="auto" className="offerAll ms-5" title='mail us:"yellobusmello@gmail.com"'></img>
        <h3 className='text-danger'> "Get on board with online bus booking – the smarter way to travel."</h3>
        
      </div>
      </div>
     
    
          
      </section>
      
  )
}

export default HomeComponent