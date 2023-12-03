import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'
export default function Layout() {


  return <>

          <SideBar/>
          <Navbar/>
             <Outlet/>
              
          
  </>
}
