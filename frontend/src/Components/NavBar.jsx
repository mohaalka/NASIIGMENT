import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'

function NavBar({children}) {
    const NavBarItems =[
        {
            path: "/",
            name: 'home'
        },
        {
            path: "/jobPortal",
            name: "job portal"
            
        },
        {
            path: "/Contact",
            name: 'Contact'
          
        },
        {
            path: "/About",
            name: 'About'
            
        },
    
    ]


  return (

    <div className="container">
        <div className="navBar">
            <div className="top_sections">
           
            <div className="bars">  
            </div>
            </div>
            {
                NavBarItems.map((item, index)=>(
                    <NavLink to ={item.path} key ={index} className="link" activeclass="active">
                        <div className="linktext">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>

        <div>
                <Outlet/>
        </div>
    </div>
    
  )
}

export default NavBar