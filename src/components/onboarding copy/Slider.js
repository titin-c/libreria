import React, { useState } from 'react'
import './slider.css'
import dataSlider from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)

        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(dataSlider.length)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(1)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    
    return (
        <>
            <div className="container-slider">
            {dataSlider.map((obj, index) => {
                    const stylo = {
                        background: `url('${process.env.PUBLIC_URL}/assets/img/${obj.background}') no-repeat`,
                        backgroundSize: "contain"
                    }

                    return (
                        <div
                            key={index}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                            style={stylo}
                        >
                            <button className='ttn-btn ttn-btn-text ttn-btn-trans'>Skip</button>
                            <h3>{obj.title}</h3>
                            <p>{obj.subTitle}</p>
                            <div className='container-btn'>
                                <button
                                    onClick={prevSlide}
                                    className='ttn-btn ttn-btn-trans'>
                                    {slideIndex === 0 + 1 ? "Salir" : "Anterior"}
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className='ttn-btn ttn-btn-primary'>
                                    {slideIndex === dataSlider.length ? "Empezar" : "Siguiente"}
                                </button>
                            </div>

                        </div>
                    )
                })}
                {/* 
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                */}
            </div>
            <div className="container-dots">
                {Array.from({ length: dataSlider.length }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div></>
    )
}