//import { Button, Tab } from 'bootstrap';
import React from 'react';
import { Card, Nav, Navbar , Button, Form, Table, Tabs, Tab } from 'react-bootstrap';

import imgurl from '../assets/images/imgUrl';
import jQuery from 'jquery';
 

const Dashboard = () => {

//   const setup =()=>{
//     $(document).ready(function() {

//         var back = $(".prev");
//         var next = $(".next");
//         var steps = $(".step");
      
//         next.bind("click", function() {
//           $.each(steps, function(i) {
//             if (!$(steps[i]).hasClass('current') && !$(steps[i]).hasClass('done')) {
//               $(steps[i]).addClass('current');
//               $(steps[i - 1]).removeClass('current').addClass('done');
//               return false;
//             }
//           })
//         });
//         back.bind("click", function() {
//           $.each(steps, function(i) {
//             if ($(steps[i]).hasClass('done') && $(steps[i + 1]).hasClass('current')) {
//               $(steps[i + 1]).removeClass('current');
//               $(steps[i]).removeClass('done').addClass('current');
//               return false;
//             }
//           })
//         });
      
//       })
//   }
    return (
        <>
        <nav id="sidebar" className="active">
            <ul className="list-unstyled components">
                <a href="/smartsetup/#/userhome" className="dashboard">
                   <li className="active"><a href="#"><i className="far fa-file-alt">
                     </i> My Application </a>
                   </li>
                </a>
                <a href="/smartsetup/#/userprofile" className="dashboard">
                    <li><a href="#"><i className="fas fa-user"></i> My Profile </a>
                    </li>
                </a>
                <a href="/smartsetup/#/upload" className="">
                    <li><a href="javascript:void(0)"><i className="fas fa-file-upload"></i> Index Cases Upload
                     </a>
                    </li>
                </a>
                <a href="/smartsetup/#/generateqrcode" className="">
                    <li><a href="javascript:void(0)"><i className="fas fa-qrcode">
                        </i> Generate QR Code </a>
                    </li>
                </a>
                <a href="/smartsetup/#/dashboardconfig" className="">
                    <li><a href="javascript:void(0)"><i className="fas fa-chart-pie">
                        </i> Configure Dashboard 
                        </a>
                    </li>
                </a>
                <a href="/smartsetup/#/usermanagement" className="">
                    <li><a href="javascript:void(0)"><i className="fas fa-users-cog">
                        </i> User Mangement 
                        </a>
                    </li>
                </a>
                <a href="/smartsetup/#/facilitymanagement" className="">
                    <li><a href="javascript:void(0)"><i className="fas fa-building">
                        </i> Facility Mangement 
                        </a>
                    </li>
                </a>
                <a href="/smartsetup/#/translations" className="">
                    <li><a href="javascript:void(0)"><i className="fas fa-language">
                        </i> Translations
                         </a>
                   </li>
                </a>
                  <li><a href="javascript:void(0)">
                            <i className="fas fa-sign-out-alt"></i> Logout 
                            </a>
                 </li>
                 </ul>
            </nav>
        <div className="contentapp">
          <Navbar expand="lg">
          <button data-v-c3854e32="" type="button" id="sidebarCollapse" className="btn btn-info"><i data-v-c3854e32="" className="fas fa-bars"></i></button>
            <Navbar.Brand href="#home">Prevent TB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <div >
                        <span>Joy Joyce</span><br></br>
                        <span>joyce@mailinator.com</span>
                        </div>
                    <i  className="fas fa-sign-out-alt fa-2x pull-right"></i>
                
                </Nav>
               
            </Navbar.Collapse>
            </Navbar>

            <div className="smart-setup-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="form-wizard">
                        <Card>
                        <Card.Header className="programHeader" as="h5">SMART SETUP</Card.Header>
                        <Card.Body>
                        

                    <ul className="nav nav-pills mb-3 arrow-steps clearfix" id="pills-tab" role="tablist">
                        <li className="nav-item step " role="presentation">
                            <a className="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="a" role="tab" aria-controls="pills-home" aria-selected="true">Program</a>
                        </li>
                        <li className="nav-item step " role="presentation">
                            <a className="nav-link " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="a" role="tab" aria-controls="pills-profile" aria-selected="false">Registration</a>
                        </li>
                        <li className="nav-item step" role="presentation">
                            <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="a" role="tab" aria-controls="pills-contact" aria-selected="false">Forms</a>
                        </li>
                        <li className="nav-item step current" role="presentation">
                            <a className="nav-link active" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="a" role="tab" aria-controls="pills-contact" aria-selected="false">Alerts</a>
                        </li>
                        <li className="nav-item step" role="presentation">
                            <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="a" role="tab" aria-controls="pills-contact" aria-selected="false">Workflow</a>
                        </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="textbtns">
                                <span><Button className="testbtn" variant="primary">Test TBI Generic</Button></span>
                                <span><Button className="nextbtn ml-2" variant="primary">Next</Button></span> 
                            </div>
                            <div><h6>Program Details</h6></div>
                            
                            <Form>
                            <div className="row">
                                <div className="col-6">
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>*Program Name</Form.Label>
                                    <Form.Control type="text" placeholder="Prevent TB" />
                                    
                                    </Form.Group>
                                </div>
                                <div className="col-6">
                                    <Form.Group controlId="formBasicPassword">
                                    <Form.Label>*App Name</Form.Label>
                                    <Form.Control type="text" placeholder="Prevent TB" />
                                   </Form.Group>
                                </div>
                                <div className="col-6">
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Program Description</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                   </Form.Group>
                                </div>
                                <div className="col-6">
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Standard Disclaimer, if any</Form.Label>
                                    <Form.Control as="textarea" rows={4} >By downloading the WHO Global Prevent TB mobile app (the “Application”), you - as user of the Application - agree to accept the terms of use, copyright notice and the disclaimers here below: In any use of this work, there should be no suggestion that WHO endorses any specific organization, products or services. The use of the WHO logo is not permitted. If you adapt the work, then you must license your work under the same or equivalent Creative Commons license. If you create a translation of this work, you should add the following disclaimer along with the suggested citation: “This translation was not created by the World Health Organization (WHO). WHO is not responsible for the content or accuracy of this translation? The original English edition shall be the binding and authentic edition”.Any mediation relating to disputes arising under the license shall be conducted in accordance with the mediation rules of the World Intellectual Property Organization.General disclaimers: The mention of specific companies or of certain manufacturers’ products does not imply that they are endorsed or recommended by the World Health Organization in preference to others of a similar nature that are not mentioned.The World Health Organization does not warrant that the information contained on this Application is complete and correct. The Organization shall not be liable for any damages incurred as a result of use of the data or programs.The generic Prevent TB platform is made available to the countries for training, adapting to country specific needs and testing in the country ecosystem. This instance and environment should not be used for capturing real patient data. For actual implementation and rolling out of this platform beyond testing, we request the countries to contact us for supporting country program specific roll-out.</Form.Control>
                                   </Form.Group>
                                </div>
                                <div className="col-6">
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Select Languages</Form.Label>
                                   <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                                   </Form.Group>
                                </div>
                                <div className="col-6">
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>* Select Country</Form.Label>
                                    <Form.Control as="select">
                                    <option>Albanaia</option>
                                    <option>India</option>
                                    <option>China</option>
                                    <option>Japan</option>
                                    <option>Uk</option>
                                    </Form.Control>
                                   </Form.Group>
                                </div>
                                <div className="col-6">
                                    <div className="row">       
                                    <div className="col-4">Select Application Icon</div>
                                    <div className="col-5">
                                        img
                                        <i class="far fa-images"></i>
                                        <span>Update Icon</span>
                                    </div>

                                    </div>
                                    
                                </div>
                                </div>
                              </Form>
                              <div className="textbtns">
                                <span><Button className="testbtn" variant="primary">Test TBI Generic</Button></span>
                                <span><Button className="nextbtn ml-2" variant="primary">Next</Button></span> 
                            </div>
                           
                            
                           

                        </div>
                        <div className="tab-pane fade " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div>
                            <div className="row pt-1">
                                <div className="col-12 bnBtn">
                                    <button tabindex="-1" type="button" className="wizard-btnb  ml-3" >Back</button>
                                    <button tabindex="-1" type="button" className="wizard-btnn  mr-3">Next
                                    </button>
                                    </div>
                            </div>
                            <div className="row mt-3">
                            <div className="col-8">
                            <Card>
                                <Card.Header>Registration</Card.Header>
                                <Card.Body>
                               
                                    <div  className="table-responsive">
                                        <table className="table ss table-hover">
                                          <thead >
                                              <tr >
                                                  <th  width="30%">Questions</th>
                                                  <th >Type</th>
                                                  <th >Mandatory</th>
                                                  <th >Searchable</th>
                                                  <th  className="text-right">Actions</th>
                                                  <th  className="text-right">Sequence</th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                            <tr  className=""><td >Client Type</td><td  className="texttablestyle">OPTIONSET</td><td  className="texttablestyle">Yes</td><td  className="texttablestyle"><input  type="checkbox" className="big-checkbox"/></td><td  className="td-actions text-right"><button  type="button" title="Edit Question" className="btn btn-info"><i  className="fas fa-pencil-alt"></i></button></td><td  className="text-right sequence-column"><span  title="Move Up"><i  className="fas fa-long-arrow-alt-up"></i></span><span  title="Move Down"><i  className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr  className=""><td >Please specify</td><td  className="texttablestyle">CHECKBOX</td><td  className="texttablestyle">No</td><td  className="texttablestyle"><input  type="checkbox" className="big-checkbox"/></td><td  className="td-actions text-right"><button  type="button" title="Edit Question" className="btn btn-info"><i  className="fas fa-pencil-alt"></i></button></td><td  className="text-right sequence-column"><span  title="Move Up"><i  className="fas fa-long-arrow-alt-up"></i></span><span  title="Move Down"><i  className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr  className=""><td >Given Name</td><td  className="texttablestyle">TEXT</td><td  className="texttablestyle">Yes</td><td  className="texttablestyle"><input  type="checkbox" checked="checked" className="big-checkbox"/></td><td  className="td-actions text-right"><button  type="button" title="Edit Question" className="btn btn-info"><i  className="fas fa-pencil-alt"></i></button></td><td  className="text-right sequence-column"><span  title="Move Up"><i  className="fas fa-long-arrow-alt-up"></i></span><span  title="Move Down"><i  className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr  className=""><td >Family Name</td><td  className="texttablestyle">TEXT</td><td  className="texttablestyle">Yes</td><td  className="texttablestyle"><input  type="checkbox" className="big-checkbox"/></td><td  className="td-actions text-right"><button  type="button" title="Edit Question" className="btn btn-info"><i  className="fas fa-pencil-alt"></i></button></td><td  className="text-right sequence-column"><span  title="Move Up"><i  className="fas fa-long-arrow-alt-up"></i></span><span  title="Move Down"><i  className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">Date of Birth</td><td className="texttablestyle">DATE</td><td className="texttablestyle">Yes</td><td className="texttablestyle"><input type="checkbox" className="big-checkbox"/></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">Age</td><td className="texttablestyle">NUMBER</td><td className="texttablestyle">Yes</td><td className="texttablestyle"><input type="checkbox" checked="checked" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className="disabled"><td data-v-538e1d14="">Gender</td><td className="texttablestyle">OPTIONSET</td><td className="texttablestyle">Yes</td><td className="texttablestyle"><input type="checkbox" checked="checked" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info undisabled"><i className="fas fa-pencil-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">Number of members in the household</td><td className="texttablestyle">NUMBER</td><td className="texttablestyle">No</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">Phone Number (Primary)</td><td className="texttablestyle">NUMBER</td><td className="texttablestyle">Yes</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button><button title="Delete Question" type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">Phone Number (secondary)</td><td className="texttablestyle">NUMBER</td><td className="texttablestyle">No</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">Address</td><td className="texttablestyle">TEXT</td><td className="texttablestyle">Yes</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">Are You Currently On TB Treatment?</td><td className="texttablestyle">OPTIONSET</td><td className="texttablestyle">No</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">Date of initiation of TB treatment</td><td className="texttablestyle">DATE</td><td className="texttablestyle">Yes</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button><button title="Delete Question" type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">Site of Disease</td><td className="texttablestyle">CHECKBOX</td><td className="texttablestyle">No</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button><button title="Delete Question" type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">HIV Status</td><td className="texttablestyle">OPTIONSET</td><td className="texttablestyle">Yes</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">Are you on ART?</td><td className="texttablestyle">OPTIONSET</td><td className="texttablestyle">No</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button><button title="Delete Question" type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className=""><td data-v-538e1d14="">ART registration number</td><td className="texttablestyle">TEXT</td><td className="texttablestyle">Yes</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button><button title="Delete Question" type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                            <tr className="" ><td data-v-538e1d14="">Associate QR code</td><td className="texttablestyle">TEXT</td><td className="texttablestyle">No</td><td className="texttablestyle"><input type="checkbox" /></td><td className="td-actions text-right"><button type="button" title="Edit Question" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button></td><td className="text-right sequence-column"><span title="Move Up"><i className="fas fa-long-arrow-alt-up"></i></span><span title="Move Down"><i className="fas fa-long-arrow-alt-down"></i></span></td></tr>

                                          </tbody>
                                        </table>
                                        <div class="form-group is-empty"><label class="col-form-label"><span>Eligible for TPT(Age in Years)</span></label><div class="form-inline"><input type="number" class="form-control if w-25"/> -<input type="number" class="form-control if w-25"/></div></div>
                                       
                                        </div>
                                    
                                </Card.Body>
                            </Card>
                            </div>
                                <div className="col-4">
                                <Card>
                                <Card.Header>Data Variables</Card.Header>
                                    <Card.Body>
                                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                        <Tab eventKey="home" title="English">
                                        <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>*Name</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                           
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>*Type</Form.Label>
                                            <Form.Control as="select">
                                                <option>Select Type</option>
                                                <option>Text</option>
                                                <option>Option List</option>
                                                <option>Number</option>
                                                <option>Date</option>
                                                <option>Checkbox Options</option>
                                            </Form.Control>
                                        </Form.Group>
                                        
                                        </Form>
                                        <Form>
                                       
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                                <Form.Label className="mr-4">*Mandatory</Form.Label>
                                            <Form.Check inline label="Yes" name="group1" type={type} id={`inline-${type}-1`} />
                                            <Form.Check inline label="No" name="group1" type={type} id={`inline-${type}-2`} />
                                            
                                            </div>
                                        ))}
                                        </Form>
                                        <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Parent question</Form.Label>
                                            <Form.Control as="select">
                                            <option>-</option>
                                            <option>Client Type </option>
                                            <option>Please specify</option>
                                            <option>Gender </option>
                                            <option>Are You Currently On TB Treatment? </option>
                                            <option>Site of Disease </option>
                                            <option>HIV Status </option>
                                            <option>Are you on ART?  </option>
                                            
                                            </Form.Control>
                                        </Form.Group>
                                        </Form>
                                        <div>
                                        <Button className="addbtn" variant="primary">Add</Button>
                                        </div>
                                        
                                        </Tab>
                                        <Tab eventKey="profile" title="Arabic">
                                            abc12
                                        </Tab>
                                        <Tab eventKey="contact" title="Chinese">
                                            abc13
                                        </Tab>
                                        <Tab eventKey="contact1" title="Spanish">
                                            abc13vv
                                        </Tab>
                                        <Tab eventKey="contact2" title="French">
                                            abc13ff
                                        </Tab>
                                        <Tab eventKey="contact3" title="Russian">
                                            abc1333
                                        </Tab>
                                    </Tabs>
                                    </Card.Body>
                                </Card>
                                </div>
                                </div>
                                <div class="wizard-card-footer clearfix">
                                                <div class="wizard-footer-left"><span role="button" tabindex="0"><button tabindex="-1" type="button" class="wizard-btnb" >
                                                Back
                                                </button></span> </div>
                                                <div class="wizard-footer-right"> <span role="button" tabindex="0"><button tabindex="-1" type="button" class="wizard-btnn" >
                                                Next
                                            </button></span></div>
                                </div>
                            
                            </div>


                        </div>
                        <div className="tab-pane fade " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">..3.</div>
                        <div className="tab-pane fade show active" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div>
                            <div className="row pt-1">
                                <div className="col-12 bnBtn">
                                    <button tabindex="-1" type="button" className="wizard-btnb  ml-3" >Back</button>
                                    <button tabindex="-1" type="button" className="wizard-btnn  mr-3">Next
                                    </button>
                                    </div>
                            </div>
                            <div className="row">
                            
                            <div className="col-6">
                            <div className="row">
                               <div className="col-8">Alert Name</div>
                                <div className="col-3">Threshold in days</div>
                            </div>
                            </div>
                                
                                <div className="col-4">Select data variables (to be shown in the Client cards in Alerts Section of the App)
                                 </div>
                            </div>
                            </div>
                        </div>
                        </div>
                           
                        </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
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
        </>
        
       
    );


};

export default Dashboard;