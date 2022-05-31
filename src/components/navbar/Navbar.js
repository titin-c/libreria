import React, { useEffect, useState } from "react";



export const NavbarIcon = ({ data }) => {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/assets/img/icons/${data.img}.svg`} alt={data.title} width='25' height='25' />
    </>
  );
};

const Navbar = ({children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
 
        const updateIndex = (newIndex) => {
          if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
          } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
          }
          setActiveIndex(newIndex);
        };
      
      

  const numeroHijos = React.Children.count(children);


  return (
    <div    className="menu-marker" >
      <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) =>
                <div className="carousel-item">Page [<b>{index+1}</b>]</div>
            )}
      </div>
      </div>
      <div
        className="marker"
        style={{ left: `calc(${100/numeroHijos*activeIndex}% + 15px)` }}
      > 
      </div>
      
        <ul className="navbar-marker">
        {React.Children.map(children, (child, index) => {
          return (
              <li>
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
               {child} 
            </button>
            </li>
          );
        })}
        </ul>
      
    </div>
  );
};

export default Navbar;
