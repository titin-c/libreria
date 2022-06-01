import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <Link
          className="navbar-brand"
          to="libreria/"
        >
          Libreria de Recursos
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              activeclassname="active"
              className="nav-link"
              exact="true"
              to="libreria/botones"
            >
              Botoneslibreria
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeclassname="active"
              className="nav-link"
              exact="true"
              to="libreria/formularios"
            >
              Formularios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeclassname="active"
              className="nav-link"
              exact="true"
              to="libreria/popover"
            >
              Popovers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeclassname="active"
              className="nav-link"
              exact="true"
              to="libreria/onboarding"
            >
              Onboarding
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
              activeclassname="active"
              className="nav-link"
              exact="true"
              to="libreria/cards"
            >
              Cards
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
              activeclassname="active"
              className="nav-link"
              exact="true"
              to="libreria/product-tables"
            >
              Product tables
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
              activeclassname="active"
              className="nav-link"
              exact="true"
              to="libreria/navbar"
            >
              Navbar
            </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}