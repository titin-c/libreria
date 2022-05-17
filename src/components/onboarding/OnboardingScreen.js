import React from 'react';
import data from './dataSlider';
import { Slider } from './Slider';
import SwitchCheck from '../forms/SwitchCheck'

export const OnboardingScreen = () => {
  return (
    <div className="cont">
      <h1>Onboarding</h1>
      <section>
        <h2>Página de incorporación de usuarios</h2>
        <div className="btn-recipient">
        <Slider data={data}/>
          
        </div>
      </section>
    </div>
  )
}