import React from "react";
import useToggle from "../../hooks/useToogle";

function SwitchButton({ claseUnactive, claseActive, textUnactive, textActive }) {
  const { toggled, setToggle } = useToggle(false);
  return (
    <div className={toggled ? "switch-container active" : "switch-container"}>
        <button
          
          className={toggled ? `ttn-btn  ${claseActive}` : `ttn-btn  ${claseUnactive}`}
          disabled={toggled ? true : false}
          type="button"
          onClick={() => setToggle(!toggled)}
        >{toggled ? `${textActive}` : `${textUnactive}`}
        </button>
    </div>
  );
}

export default SwitchButton;