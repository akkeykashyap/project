import React from 'react';
import logo from "../photos/house.png";
import "../style/home.css";
import Card from './card';


export default function Home() {
    
  return( 
     <div className='home-container'>

        <div className='container d-flex'>
              <div className='main-text'>
                 <p className="main-text-item fs-1 fw-bold ">Land <br></br> Registration Using <br></br> Blockchain</p>
              </div>

              <div className='main-logo'>
                <img src={logo} alt="Logo" />
              </div>
         </div>

         < Card />
    </div>

  );
}
