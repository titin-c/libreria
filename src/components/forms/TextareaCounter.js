import React from 'react';

    
    export const TextareaCounter = (name) => {
        const max = 120;
        const [count, setCount] = React.useState(0);
      return (
        <div className="ttn-form-cont">
      <label htmlFor={name} className="ttn-form-label" >Escribe algo</label> 
        <div className='ttn-form-counter'>
        <textarea
            id={name}
            placeholder="Escribe algo"
          type="text"
          rows={5}
          maxLength={max}
          className="ttn-textarea"
          onChange={e => setCount(e.target.value.length)}
        />
        <span className='ttn-textform-counter'>{count}/{max}</span>
        </div>
      </div>
      )
    }
    