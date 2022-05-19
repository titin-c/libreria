import React from 'react';
import data from './dataCards';
import { Cards } from './Cards';

export const CardsScreen = () => {
  return (
    <div className="cont">
      <h1>Cards</h1>
      <section>
        <h2>Responsive flex cards</h2>
        <div className="btn-recipient">
          <Cards data={data}  />
          
        </div>
      </section>
    </div>
  )
}