import React from 'react';
import data from './dataSlider';
import data2 from './dataSlider2';
import { Slider } from './Slider';

export const OnboardingScreen = () => {
  return (
    <div className="cont">
      <h1>Onboarding</h1>
      <section>
        <h2>Página de incorporación de usuarios</h2>
        <div className="btn-recipient">
          <Slider data={data} clase={'onboarding1'} />
          <Slider data={data2} clase={'onboarding2'} />  
        </div>
      </section>
    </div>
  )
}