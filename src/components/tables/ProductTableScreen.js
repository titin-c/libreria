import React from 'react';
import Tabs from './Tabs';
import dataTabs from'./dataTabs';

export const ProductTableScreen = () => {
  return (
    <div className="cont">
      <h1>Product table</h1>
      <section>
        <h2>Responsive product tables</h2>
        <div className="cards-shop">
      
      {dataTabs.map((dataTabs) =>
        <Tabs key={dataTabs.id} dataTabs={dataTabs}>
          
        </Tabs>
      )}
        
      
    </div>
      </section>
    </div>
  )
}
