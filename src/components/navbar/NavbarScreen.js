import React from 'react'
import Navbar, { NavbarIcon } from "./Navbar";
import { NavbarCss } from './NavbarCss';
import { NavbarCss2 } from './NavbarCss2';

import navbarData from './navbarData'

export const NavbarScreen = () => {
  return (
    <div className="cont">
      <h1>Navbar</h1>
      <section>
        <h2>Icon mobile menu</h2>
        <div className="btn-recipient">
             <Navbar data={navbarData}>
          
            {navbarData.map((data) =>
              <NavbarIcon key={data.id} data={data} title={data.title} ></NavbarIcon>
            )}
          </Navbar>
        </div>
      </section>
      <section>
        <h2>Css menu</h2>
        <div className="btn-recipient">
             <NavbarCss  />
        </div>
      </section>
      <section>
        <h2>Css menu</h2>
        <div className="btn-recipient">
             <NavbarCss2  />
        </div>
      </section>
    </div>
  )
}
