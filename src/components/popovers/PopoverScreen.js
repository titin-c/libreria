import React from 'react'
import PopOver from './PopOver'

export const PopoverScreen = () => {
  return (
    <div  className="cont">
        <h1>Popovers</h1>
        <section>
          <h2>Over</h2>
          <div className="popover-recipient">
          <PopOver position="left"/> <PopOver position="top"/> <PopOver position="right"/> <PopOver position="bottom"/>
          </div>
        </section>
      </div>
  )
}
