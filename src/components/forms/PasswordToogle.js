import React from "react";
import useToggle from "../../hooks/useToogle";

function PasswordToogle({ name }) {
  const initialState = false;
  const { toggled, setToggle } = useToggle(initialState);
  return (
    <div className="ttn-form-cont">
      <label htmlFor={name} className="ttn-form-label" >Contraseña</label>  
        
          <input
          id={name}
          placeholder="Your password..."
          className="ttn-input"
          type={toggled ? "text" : "password"}
          name={name}
          
          />

          <span onClick={() => setToggle(!toggled)} className="ttn-form-input-label-pass-eye" >
          {toggled ? (
                <img src="../../assets/img/icons/icon-eye.svg" alt="Ver contraseña"/>
            )
            :(
                <img src="../../assets/img/icons/icon-noeye.svg" alt="Ocultar contraseña"/>
            )}
          </span>
    </div>
  );
}

export default PasswordToogle;