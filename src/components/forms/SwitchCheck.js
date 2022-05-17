import React from "react";
import useToggle from "../../hooks/useToogle";

function SwitchCheck({ name, title1, title2 }) {
  const initialState = false;
  const { toggled, setToggle } = useToggle(initialState);
  return (
    <div className={toggled ? `switch-container active ${name}` : `switch-container  ${name}`}>
      <label htmlFor={name} className="switch-label" >    
      <span className={toggled ? "checked" : "no-checked"}>{toggled ? title1 : title2}</span>
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