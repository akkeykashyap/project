import contract from "../photos/contract.png";
import inspection from "../photos/inspection.png";
import contact from "../photos/contact.webp";

function Card() {
    return ( 
        <div className='card-container d-flex'>

            <div className='card-item'>
               <div className='item-img'>
                  <img src={contact} className="card-img-top" alt="contact-logo" />
               </div>
               <p className="card-txt">Contract Owner</p>               
               <div className='item-btn'>
                 <a href="#" className='card-btn'>Continue</a>
               </div>
            </div>

            <div className='card-item'>

               <div className='item-img'>
                  <img src={inspection} className="card-img-top" alt="contact-logo" />
               </div>

               <div className="card-txt d-flex justify-content-center">Land Inspector</div>

               <div className='item-btn'>
                 <a href="#" className='card-btn'>Continue</a>
               </div>

            </div>

            <div className='card-item'>

               <div className='item-img'>
                  <img src={ contract} className="card-img-top" alt="contact-logo" />
               </div>
               
               <div className="card-txt d-flex justify-content-center">Contract</div>

               <div className='item-btn'>
                  <a href="#" className='card-btn'>Continue</a>  
               </div>

            </div>
        </div>
     );
}

export default Card;
