import React from 'react'
import { Card } from './Card'

export const Cards = (props) => {
    return (
        <div className='cards-shop'>
            {props.data.map((data, index) =>
                <Card key={data.id} data={data} index={index} />
            )}
        </div>
    )
}
