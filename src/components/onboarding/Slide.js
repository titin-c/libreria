import React from 'react'

export const Slide = (props) => {
    const stylo = {
        background: `url('${process.env.PUBLIC_URL}/assets/img/${props.data.background}') no-repeat`,
        
    }
  
  return (
    
    <div
    className={props.slideIndex === props.index + 1 ? `slide slide${props.index} active-anim` : `slide slide${props.index}`}
    style={stylo}
>
    <div className='slide-content'>
    <img src={`${process.env.PUBLIC_URL}/assets/img/${props.data.image}`} alt={props.data.title} width='200px' height='200px' className='onboarding-img'/>
    <h3>{props.data.title}</h3>
    <p>{props.data.subTitle}</p>
    <div className='container-btn'>
        <button
            onClick={props.prevSlide}
            className='ttn-btn ttn-btn-trans'>
            {props.slideIndex === 0 + 1 ? "Saltar" : "Anterior"}
        </button>
        <button
            onClick={props.nextSlide}
            className='ttn-btn'>
            {props.slideIndex - props.dataLenght ===0 ? "¡EMPEZAR!" : "Siguiente"}
        </button>
    </div>
    </div>
</div>
  )
}

