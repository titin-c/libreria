import React from 'react';
import Slider from './Slider';

export const OnboardingScreen = () => {
  return (
    <div className="cont">
      <h1>Onboarding</h1>
      <section>
        <h2>Página de incorporación de usuarios</h2>
        <div className="btn-recipient">
        <Slider />
        </div>
      </section>
    </div>
  )
}