import React from 'react';

    
    export const InputCounter = (name) => {
        const max = 20;
        const [count, setCount] = React.useState(0);
      return (
        <div className="ttn-form-cont">
      <label htmlFor={name} className="ttn-form-label" >Escribe algo</label> 
        <div className='ttn-form-counter'>
        <input
            id={name}
            placeholder="Escribe algo"
          type="text"
          maxLength={max}
          className="ttn-input"
          onChange={e => setCount(e.target.value.length)}
        />
        <span className='ttn-textform-counter'>{max - count}/{max}</span>
        </div>
      </div>
      )
    }
    