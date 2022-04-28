import React from "react";
import useToggle from "../../hooks/useToogle";

function PopOver({ position, name }) {
    const { toggled, setToggle } = useToggle(false);
  return (
    <div className={toggled ? 'ttn-pop-container active' : 'ttn-pop-container'}>
        <button
          
          className="ttn-btn"
          type="button"
          onMouseOver={() => setToggle(!toggled)}
          onMouseOut={() => setToggle(!toggled)}
          onClick={() => setToggle(!toggled)}
        >Popover  {position}
        </button>
        <div className={`ttn-pop ${ position}`}>
          {toggled && (
                <div>
                    <div className="ttn-pop-close" onClick={() => setToggle(!toggled)}></div>
                    <div className="ttn-pop-arrow"></div>
                   <div className="ttn-pop-header">Cabecera del pop</div>
                   <div className="ttn-pop-body">Cuerpo del pop Cuerpo del pop Cuerpo del pop Cuerpo del pop Cuerpo del pop </div>
                   <div className="ttn-pop-footer">
                       <button type="button"  className="ttn-btn ">Botón principal</button>
                       <button type="button"  className="ttn-btn ttn-btn-primary">Botón principal</button>  
            </div>
                   
                </div>
            )}
          </div>
    </div>
  );
}

export default PopOver;