import React from "react";
import useToggle from "../../hooks/useToogle";

function SwitchCheck({ name }) {
  const initialState = false;
  const { toggled, setToggle } = useToggle(initialState);
  return (
    <div className={toggled ? `switch-container active ${name}` : `switch-container  ${name}`}>
      <label htmlFor={name} className="switch-label" >    
      <span className={toggled ? "checked" : "no-checked"}></span>
        </label>  
        <div className="switch-cont" onClick={() => setToggle(!toggled)}>
          <input
          id={name}
          className="switch-checkbox"
          type="checkbox"
          name={name}
          onChange={() => setToggle(!toggled)}
          onClick={() => setToggle(!toggled)}
          />
        </div>
    </div>
  );
}

export default SwitchCheck;