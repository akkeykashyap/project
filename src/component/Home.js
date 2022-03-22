import React from 'react';
import logo from "../photos/house.png";
import contract from "../photos/contract.png";
import inspector from "../photos/inspector.jpg";
import contact from "../photos/contact.webp"
import "../style/home.css";


export default function Home() {
    
  return( 
     <div className='home-container'>
          <div className='d-flex'>
              <div className='main-text'>
                 <p className="main-text-item fs-1 fw-bold ">Land <br></br> Registration Using <br></br> Blockchain</p>
              </div>

              <div className='main-logo'>
               <img src={logo} alt="Logo" />
             </div>
         </div>

         <div className='card-container d-flex'>
            <div className='card-item'>
               <div className='item-img'>
                  <img src={contact} class="card-img-top h-20" alt="contact-logo" />
               </div>
               <div>
                 <p>Users</p>
               </div>
               <div className='item-btn'>
                 <button className='card-btn'>Continue</button>
               </div>
            </div>

            <div className='card-item'>
               <div className='item-img'>
                  <img src={inspector} class="card-img-top h-20" alt="contact-logo" />
               </div>
               <div>
                 <p>Users</p>
               </div>
               <div className='item-btn'>
                 <button className='card-btn'>Continue</button>
               </div>
            </div>

            <div className='card-item'>
               <div className='item-img'>
                  <img src={ contract} class="card-img-top h-20" alt="contact-logo" />
               </div>
               <div>
                 <p>Contract</p>
               </div>
               <div className='item-btn'>
                 <button className='card-btn'>Continue</button>
               </div>
            </div>
         </div>

         {/* <div class="row row-cols-1 row-cols-md-3 g-3 p-5 mt-5 pt-5 ">
            <div class="col">
              <div class="card h-50">
                <img src={contact} class="card-img-top h-20" alt="contact-logo" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-50">
                <img src={inspector} class="card-img-top" alt="inspector-logo" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a short card.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-50">
              <img classname= "contract-img card-img-top" src={contract} alt='contract-logo' />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
           
          </div> */}
     </div>
  )
}
