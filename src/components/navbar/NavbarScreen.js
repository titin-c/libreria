import React from 'react'
import Navbar, { NavbarIcon } from "./Navbar";

import navbarData from './navbarData'

export const NavbarScreen = () => {
  return (
    <div className="cont">
      <h1>Navbar</h1>
      <section>
        <h2>Icon mobile menú</h2>
        <div className="btn-recipient">
             <Navbar data={navbarData}>
          
            {navbarData.map((data) =>
              <NavbarIcon key={data.id} data={data} title={data.title} ></NavbarIcon>
            )}
          </Navbar>
        </div>
      </section>

    </div>
  )
}
