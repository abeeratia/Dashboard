import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Users from './Component/Users/Users';
import Admin from './Component/Admin/Admin';
import Content from './Component/Content/Content';
import Message from './Component/Message/Message';
import Dashboard from './Component/Dashboard/Dashboard'
import Reports from './Component/Reports/Reports'
import Profile from './Component/Profile/Profile'

 

const root= createBrowserRouter([
   {path:'/'  , element:<Layout/> ,children:[

    {index:true  , element:<Dashboard/>},
    {path:'/Dashboard'  , element:<Dashboard/>},
    {path:'/Users'  , element:<Users/>},
    {path:'/Reports'  , element:<Reports/>},
    {path:'/Admin'  , element:<Admin/>},
    {path:'/Content'  , element:<Content/>},
    {path:'/Message'  , element:<Message/>},
    {path:'/Profile'  , element:<Profile/>},
    
    {path:'*', element: <div className=' w-50 m-auto d-flex vh-100 justify-content-center align-items-center'>
    <h2 className='fs-1 text-danger'>Not Found The Page</h2>
 </div>}
   ]},
   
])     


export default function App() {



  return <>
   <RouterProvider router = {root}/>
 

 </>
  
}
