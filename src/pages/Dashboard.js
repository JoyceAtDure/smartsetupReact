import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import imgurl from '../assets/images/imgUrl';

 

const Dashboard = () => {
 
    return (
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Prevent TB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <div >
                        <span><p>Joy Joyce</p></span>
                        <span><p>joyce@mailinator.com</p></span>
                        </div>
                    <i  className="fas fa-sign-out-alt fa-2x pull-right"></i>
                
                </Nav>
               
            </Navbar.Collapse>
            </Navbar>

            
            <div className="footer">
                <div className="row">
                    <div className="col-6">
                       <p className="footext">Powered by  <img className="fooimg" src={imgurl.durelogo.default}/></p>  </div>
                    <div className="col-6">
                       <div class="widthMaxContent ml-auto pt-2">
                           <p className="footextcopy">Copyright © 2020. All rights reserved</p></div>
                    </div>
                </div>
            </div>

        </div>
        
       
    );


};

export default Dashboard;