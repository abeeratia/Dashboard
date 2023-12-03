import React from 'react'
import './Admin.css'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import x from '../../images/material-symbols_upload.svg'

export default function Users() {
    return <div className='user paddingweb2'>
        <div className="container   ">
            <div className=' d-flex    pb-4 '>
                <h2 style={{color: 'var(--main, #040D5F)', fontWeight: '800'}}>Members</h2>
                 
                 
                {/* Button trigger modal */}
           <button type="button" style={{fontWeight: '500'}} className="btn text-white colorweb3 border-0  rounded-2 fs-5  ms-3  px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Add Admin</button>

                      {/* <!-- Modal --> */}
                      <div className="modal modalmargin fade mx-auto align-items-center justify-content-center" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                   <div className="modal-content  ">
                                       <div className="modal-header border-0">
                                         <h2 className="modal-title  fs-3 colorweb fw-bold" id="exampleModalLabel">Add Admin</h2>
                                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        
                                </div>
                          <div className="modal-body border-0">
                            <input placeholder='Enter Your Fullname' className='placeholde backgroundcolorr  form-control border-0 bg-light py-1'id='name' type="text" />
                            <input placeholder='Enter Your PhoneNumber' className='placeholde backgroundcolorr mt-2 form-control border-0 bg-light py-1'id='number' type="tel" />
                            <input placeholder='Enter Your Email' className='placeholde backgroundcolorr mt-2 form-control border-0 bg-light py-1'id='email' type="email" />
                            <input placeholder='Enter Your Password' className='placeholde backgroundcolorr my-2 form-control border-0 bg-light py-1'id='Password' type="Password" />
                           
                           <input   type='file' id='file' accept='image/*'/>
                            <label htmlFor="file" style={{color:'#f8f9fa'}} className='text-muted  '><div className='d-flex  p-2 align-items-center'><img className='imguploaded ' src={x} alt="uploadedimg" /> <span style={{color:'#040D5F7A',fontWeight:'500',paddingBlock:'15px',borderRadius:'50px'}}>Upload Photo</span></div> </label>
                         </div>
                    <div className="modal-footer border-0">
                             <button type="button" className="btn colorweb3 text-white px-5 fw-bold ">Done</button>
                          </div>
                             </div>
                               </div>
                                 </div>
                <button className='btn outline- rounded-2  ms-3  px-4' style={{border:'1px solid #050D5982',color:'#030d5e',textTransform:'camelcase' }}>
                    Export members(Excel)
                </button>
            </div>

        </div>
        <div className='shadow rounded-4 container  p-4'>
        <div className="responsive-table     ">
                        <table className='w-100 fs-5'>
                        <thead >
                        <tr>
                            <th className='colorweb pt-4 fs-4'>photo</th>
                            <th className='colorweb pt-4 fs-4'>name</th>
                            <th className='colorweb pt-4 fs-4'>mobile</th>
                            <th className='colorweb pt-4 fs-4'>email</th>
                            <th className='colorweb pt-4 fs-4'>state</th>
                            <th className='colorweb pt-4 fs-4'>opertaion</th>
                        </tr>
                        </thead>
                        <tbody >
                        <tr>
                            <td><img src={require('../../images/Rectangle 11.png')} alt=""/></td>
                            <td className='colorweb pt-4 '>mai saleh</td>
                            <td className='colorweb pt-4'>01090701566</td>
                            <td className='colorweb pt-4'>maisaleh@app.com</td>
                            <td className='colorweb pt-4'>member</td>
                            <td className='pt-4'><svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                <path
                                    d="M9.33337 9.3335H8.00004C7.2928 9.3335 6.61452 9.61445 6.11442 10.1145C5.61433 10.6146 5.33337 11.2929 5.33337 12.0002V24.0002C5.33337 24.7074 5.61433 25.3857 6.11442 25.8858C6.61452 26.3859 7.2928 26.6668 8.00004 26.6668H20C20.7073 26.6668 21.3856 26.3859 21.8857 25.8858C22.3858 25.3857 22.6667 24.7074 22.6667 24.0002V22.6668"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path
                                    d="M21.3333 6.66681L25.3333 10.6668M27.18 8.78014C27.7051 8.25501 28.0001 7.54279 28.0001 6.80014C28.0001 6.0575 27.7051 5.34527 27.18 4.82014C26.6549 4.29501 25.9426 4 25.2 4C24.4574 4 23.7451 4.29501 23.22 4.82014L12 16.0001V20.0001H16L27.18 8.78014Z"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                    <path
                                        d="M9.33325 28C8.59992 28 7.97192 27.7387 7.44925 27.216C6.92659 26.6933 6.6657 26.0658 6.66659 25.3333V8H5.33325V5.33333H11.9999V4H19.9999V5.33333H26.6666V8H25.3333V25.3333C25.3333 26.0667 25.0719 26.6947 24.5493 27.2173C24.0266 27.74 23.399 28.0009 22.6666 28H9.33325ZM11.9999 22.6667H14.6666V10.6667H11.9999V22.6667ZM17.3333 22.6667H19.9999V10.6667H17.3333V22.6667Z"
                                        fill="#040D5F"/>
                                </svg></td>
                        </tr>
                        <tr>
                            <td><img src={require('../../images/Rectangle 11.png')} alt=""/></td>
                            <td className='colorweb pt-4'>mai saleh</td>
                            <td className='colorweb pt-4'>01090701566</td>
                            <td className='colorweb pt-4'>maisaleh@app.com</td>
                            <td className='colorweb pt-4'>member</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                <path
                                    d="M9.33337 9.3335H8.00004C7.2928 9.3335 6.61452 9.61445 6.11442 10.1145C5.61433 10.6146 5.33337 11.2929 5.33337 12.0002V24.0002C5.33337 24.7074 5.61433 25.3857 6.11442 25.8858C6.61452 26.3859 7.2928 26.6668 8.00004 26.6668H20C20.7073 26.6668 21.3856 26.3859 21.8857 25.8858C22.3858 25.3857 22.6667 24.7074 22.6667 24.0002V22.6668"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path
                                    d="M21.3333 6.66681L25.3333 10.6668M27.18 8.78014C27.7051 8.25501 28.0001 7.54279 28.0001 6.80014C28.0001 6.0575 27.7051 5.34527 27.18 4.82014C26.6549 4.29501 25.9426 4 25.2 4C24.4574 4 23.7451 4.29501 23.22 4.82014L12 16.0001V20.0001H16L27.18 8.78014Z"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                    <path
                                        d="M9.33325 28C8.59992 28 7.97192 27.7387 7.44925 27.216C6.92659 26.6933 6.6657 26.0658 6.66659 25.3333V8H5.33325V5.33333H11.9999V4H19.9999V5.33333H26.6666V8H25.3333V25.3333C25.3333 26.0667 25.0719 26.6947 24.5493 27.2173C24.0266 27.74 23.399 28.0009 22.6666 28H9.33325ZM11.9999 22.6667H14.6666V10.6667H11.9999V22.6667ZM17.3333 22.6667H19.9999V10.6667H17.3333V22.6667Z"
                                        fill="#040D5F"/>
                                </svg></td>
                        </tr>
                        <tr>
                            <td ><img src={require('../../images/Rectangle 11.png')} alt=""/></td>
                            <td className='colorweb pt-4'>mai saleh</td>
                            <td className='colorweb pt-4'>01090701566</td>
                            <td className='colorweb pt-4'>maisaleh@app.com</td>
                            <td className='colorweb pt-4'>member</td>
                            <td className='pt-4'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                <path
                                    d="M9.33337 9.3335H8.00004C7.2928 9.3335 6.61452 9.61445 6.11442 10.1145C5.61433 10.6146 5.33337 11.2929 5.33337 12.0002V24.0002C5.33337 24.7074 5.61433 25.3857 6.11442 25.8858C6.61452 26.3859 7.2928 26.6668 8.00004 26.6668H20C20.7073 26.6668 21.3856 26.3859 21.8857 25.8858C22.3858 25.3857 22.6667 24.7074 22.6667 24.0002V22.6668"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path
                                    d="M21.3333 6.66681L25.3333 10.6668M27.18 8.78014C27.7051 8.25501 28.0001 7.54279 28.0001 6.80014C28.0001 6.0575 27.7051 5.34527 27.18 4.82014C26.6549 4.29501 25.9426 4 25.2 4C24.4574 4 23.7451 4.29501 23.22 4.82014L12 16.0001V20.0001H16L27.18 8.78014Z"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                    <path
                                        d="M9.33325 28C8.59992 28 7.97192 27.7387 7.44925 27.216C6.92659 26.6933 6.6657 26.0658 6.66659 25.3333V8H5.33325V5.33333H11.9999V4H19.9999V5.33333H26.6666V8H25.3333V25.3333C25.3333 26.0667 25.0719 26.6947 24.5493 27.2173C24.0266 27.74 23.399 28.0009 22.6666 28H9.33325ZM11.9999 22.6667H14.6666V10.6667H11.9999V22.6667ZM17.3333 22.6667H19.9999V10.6667H17.3333V22.6667Z"
                                        fill="#040D5F"/>
                                </svg></td>
                        </tr>
                        <tr>
                            <td><img src={require('../../images/Rectangle 11.png')} alt=""/></td>
                            <td className='colorweb pt-4'>mai saleh</td>
                            <td className='colorweb pt-4'>01090701566</td>
                            <td className='colorweb pt-4'>maisaleh@app.com</td>
                            <td className='colorweb pt-4'>member</td>
                            <td className='pt-4'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                <path
                                    d="M9.33337 9.3335H8.00004C7.2928 9.3335 6.61452 9.61445 6.11442 10.1145C5.61433 10.6146 5.33337 11.2929 5.33337 12.0002V24.0002C5.33337 24.7074 5.61433 25.3857 6.11442 25.8858C6.61452 26.3859 7.2928 26.6668 8.00004 26.6668H20C20.7073 26.6668 21.3856 26.3859 21.8857 25.8858C22.3858 25.3857 22.6667 24.7074 22.6667 24.0002V22.6668"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path
                                    d="M21.3333 6.66681L25.3333 10.6668M27.18 8.78014C27.7051 8.25501 28.0001 7.54279 28.0001 6.80014C28.0001 6.0575 27.7051 5.34527 27.18 4.82014C26.6549 4.29501 25.9426 4 25.2 4C24.4574 4 23.7451 4.29501 23.22 4.82014L12 16.0001V20.0001H16L27.18 8.78014Z"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                    <path
                                        d="M9.33325 28C8.59992 28 7.97192 27.7387 7.44925 27.216C6.92659 26.6933 6.6657 26.0658 6.66659 25.3333V8H5.33325V5.33333H11.9999V4H19.9999V5.33333H26.6666V8H25.3333V25.3333C25.3333 26.0667 25.0719 26.6947 24.5493 27.2173C24.0266 27.74 23.399 28.0009 22.6666 28H9.33325ZM11.9999 22.6667H14.6666V10.6667H11.9999V22.6667ZM17.3333 22.6667H19.9999V10.6667H17.3333V22.6667Z"
                                        fill="#040D5F"/>
                                </svg></td>
                        </tr><tr>
                            <td><img src={require('../../images/Rectangle 11.png')} alt=""/></td>
                            <td className='colorweb pt-4' >mai saleh</td>
                            <td className='colorweb pt-4' >01090701566</td>
                            <td className='colorweb pt-4' >maisaleh@app.com</td>
                            <td className='colorweb pt-4' >member</td>
                            <td className='pt-4'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                <path
                                    d="M9.33337 9.3335H8.00004C7.2928 9.3335 6.61452 9.61445 6.11442 10.1145C5.61433 10.6146 5.33337 11.2929 5.33337 12.0002V24.0002C5.33337 24.7074 5.61433 25.3857 6.11442 25.8858C6.61452 26.3859 7.2928 26.6668 8.00004 26.6668H20C20.7073 26.6668 21.3856 26.3859 21.8857 25.8858C22.3858 25.3857 22.6667 24.7074 22.6667 24.0002V22.6668"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path
                                    d="M21.3333 6.66681L25.3333 10.6668M27.18 8.78014C27.7051 8.25501 28.0001 7.54279 28.0001 6.80014C28.0001 6.0575 27.7051 5.34527 27.18 4.82014C26.6549 4.29501 25.9426 4 25.2 4C24.4574 4 23.7451 4.29501 23.22 4.82014L12 16.0001V20.0001H16L27.18 8.78014Z"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                    <path
                                        d="M9.33325 28C8.59992 28 7.97192 27.7387 7.44925 27.216C6.92659 26.6933 6.6657 26.0658 6.66659 25.3333V8H5.33325V5.33333H11.9999V4H19.9999V5.33333H26.6666V8H25.3333V25.3333C25.3333 26.0667 25.0719 26.6947 24.5493 27.2173C24.0266 27.74 23.399 28.0009 22.6666 28H9.33325ZM11.9999 22.6667H14.6666V10.6667H11.9999V22.6667ZM17.3333 22.6667H19.9999V10.6667H17.3333V22.6667Z"
                                        fill="#040D5F"/>
                                </svg></td>
                        </tr><tr>
                            <td><img src={require('../../images/Rectangle 11.png')} alt=""/></td>
                            <td className='colorweb pt-4' >mai saleh</td>
                            <td className='colorweb pt-4'  >01090701566</td>
                            <td className='colorweb pt-4' >maisaleh@app.com</td>
                            <td className='colorweb pt-4' >member</td>
                            <td className='colorweb pt-4' ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                <path
                                    d="M9.33337 9.3335H8.00004C7.2928 9.3335 6.61452 9.61445 6.11442 10.1145C5.61433 10.6146 5.33337 11.2929 5.33337 12.0002V24.0002C5.33337 24.7074 5.61433 25.3857 6.11442 25.8858C6.61452 26.3859 7.2928 26.6668 8.00004 26.6668H20C20.7073 26.6668 21.3856 26.3859 21.8857 25.8858C22.3858 25.3857 22.6667 24.7074 22.6667 24.0002V22.6668"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path
                                    d="M21.3333 6.66681L25.3333 10.6668M27.18 8.78014C27.7051 8.25501 28.0001 7.54279 28.0001 6.80014C28.0001 6.0575 27.7051 5.34527 27.18 4.82014C26.6549 4.29501 25.9426 4 25.2 4C24.4574 4 23.7451 4.29501 23.22 4.82014L12 16.0001V20.0001H16L27.18 8.78014Z"
                                    stroke="#040D5F" stroke-width="1.33333" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                    <path
                                        d="M9.33325 28C8.59992 28 7.97192 27.7387 7.44925 27.216C6.92659 26.6933 6.6657 26.0658 6.66659 25.3333V8H5.33325V5.33333H11.9999V4H19.9999V5.33333H26.6666V8H25.3333V25.3333C25.3333 26.0667 25.0719 26.6947 24.5493 27.2173C24.0266 27.74 23.399 28.0009 22.6666 28H9.33325ZM11.9999 22.6667H14.6666V10.6667H11.9999V22.6667ZM17.3333 22.6667H19.9999V10.6667H17.3333V22.6667Z"
                                        fill="#040D5F"/>
                                </svg></td>
                        </tr>
                        </tbody>
                        </table>
                   
                </div>
            <div >

          
                  

            </div>
        </div>

    </div>
}
