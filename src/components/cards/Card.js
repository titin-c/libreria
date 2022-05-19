import React from 'react'

export const Card = (props) => {
    const newPrice=props.data.newPrice;
    const oldPrice=props.data.price;
    const tantoX100= 100 - (100 * newPrice / oldPrice);
    

    return (
        <div className='card-container'>
            {newPrice && <div className='card-oferta'>OFERTA {Math.round(tantoX100)}%</div>}
            <div className='card-image-cont'>
                <img src={`${process.env.PUBLIC_URL}/assets/img/${props.data.image}`} alt={props.data.title} width='200px' height='300px' className='card-img' />
                </div>
            <div className='card-cont'>
                <div>
                <svg viewBox='0 0 151 16'><text x="0" y="12" width="100%" height="100%" className='card-title'>{props.data.title}</text></svg>
                <p className='card-subtitle'><i>{props.data.subTitle}</i></p>
                <p className='card-description'>{props.data.description}</p>
                </div>
                <div className='price-container'>
                    <div className={newPrice ? 'price oferta': 'price'} >
                        {newPrice && <div className='old-price'>{oldPrice}€</div>}
                        <div>
                            <span className='euros'>{props.data.entero}</span><span className='decimales'>{props.data.decimales}€</span>
                        </div>
                    </div>
                    <button className='ttn-btn ttn-btn-primary ttn-btn-rounded'>Comprar</button>
                </div>
            </div>


        </div>
    )
}
