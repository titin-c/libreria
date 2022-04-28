import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const SideBar = () => {
    return (
      <div className='sidebar'>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Libreria de Recursos
            </Link>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink 
                          activeclassname="active"
                          className="nav-link" 
                          exact="true"
                          to="/botones"
                      >
                          Botones
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                          activeclassname="active"
                          className="nav-link" 
                          exact="true"
                          to="/formularios"
                      >
                          Formularios
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                          activeclassname="active"
                          className="nav-link" 
                          exact="true"
                          to="/popover"
                      >
                          Popovers
                      </NavLink>
                    </li>
                  </ul>
        </nav>
    </div>
    )
}