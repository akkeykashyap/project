import React from "react";

class Navbar extends React.Component {
   
    render() {
        return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Land Registry</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                      <li className="nav-item">
                        <a className="nav-link active me-3" aria-current="page" href="https://www.battlegroundsmobileindia.com/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link me-3" href="#">User</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link me-3" href="#">Land Inspector</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link me-3" href="#">Contract Owner</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link me-5" href="#">About</a>
                      </li>
                    
                    </ul>
                </div>
            </div>
          </nav>
        );
       }   }
 
export default  Navbar;