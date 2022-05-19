import React, { useState } from 'react'
import {Slide} from './Slide'

export const Slider = (props) => {
  
const [slideIndex, setSlideIndex] = useState(1)
const dataLenght = props.data.length;
    const nextSlide = () => {
        if (slideIndex !== dataLenght) {
            setSlideIndex(slideIndex + 1)

        }
        else if (slideIndex === dataLenght) {
            setSlideIndex(dataLenght)
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
    <div className={`container-slider ${props.clase}`} >
      <button className='ttn-btn ttn-btn-text ttn-btn-trans btn-skip'>Skip</button>
    {props.data.map((data, index) =>

            <Slide key={data.ide}  data={data} index={index} dataLenght={dataLenght} nextSlide={nextSlide} prevSlide={prevSlide} setSlideIndex={setSlideIndex}  slideIndex={slideIndex} />
          )}
          <div className="container-dots">
                {Array.from({ length: props.data.length }).map((item, index) => (
                    <div
                    key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
          </div>
          
  )
}
