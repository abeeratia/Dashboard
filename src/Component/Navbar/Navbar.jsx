import React from 'react'
import './Navbar.css'
import x from '../../images/Ellipse 2.png'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Navbar({setToggle}) {

    return <div>
        <div className="container media paddingweb ">
            <div className="d-md-flex  d-block  m-auto  pt-3 justify-content-between ">
                <div className="col-md-4 px-3 py-3">
                   
                    <div className="d-flex justify-content-center align-items-center text-capitalize fw-semibold " >
                        <p className="h4 mt-1 pe-2  ">Sort:</p>
                         <div class="dropdown" >
                             <button className=" backgroundd colorweb2 borderr text-start dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Lastweek
                             </button>
                             <ul className="dropdown-menu dropdown-menu-light">
                                 <li><a className="dropdown-item active" href="#">Action</a></li>
                                 <li><a className="dropdown-item" href="#">Another action</a></li>
                                 <li><a className="dropdown-item" href="#">Something else here</a></li>
                                 <li><hr className="dropdown-divider"/></li>
                                 <li><a className="dropdown-item" href="#">Separated link</a></li>
                             </ul>
                         </div>
               </div>
                </div>
                <div className="col-md-3 ">
                    <div className='d-flex  align-items-center'><img style={{width: '60px', height: '60px'}} src={x}
                                                                     alt=""/>
                        <div className='ms-3  pt-3 '><h5 className='py-2'>Mai saleh </h5><p style={{color:'#C9C9C9',textTransform:'capitalize',fontWeight:'500'}}>maii
                            saleh@gmail.com </p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
