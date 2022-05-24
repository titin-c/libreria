import React from 'react'

export const TabDescription = (props) => {
  return (
    
                <div className='card-cell cell-description'>
                  <h3 className="cell-title">{props.dataTabs.title}</h3>
                  <p><span className='card-subtitle'><i>{props.dataTabs.subTitle}</i></span></p>
                    <p className='card-category'>{props.dataTabs.category}</p>
                    <p className='card-description'>{props.dataTabs.description}</p>
                </div>
            
  )
}
