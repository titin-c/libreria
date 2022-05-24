import React from 'react'

export const TabCare = (props) => {
    let cantidadLuz = "";
    const luz = props.dataTabs.luz;
    if (luz === 0) { cantidadLuz = "Interior" }
    else if (luz === 1) { cantidadLuz = "Poca luz" }
    else if (luz === 2) { cantidadLuz = "Luz media" }
    else { cantidadLuz = "Mucha luz" }

    let cantidadAgua = "";
    const agua = props.dataTabs.agua;
    if (agua === 0) { cantidadAgua = "Secano" }
    else if (agua === 1) { cantidadAgua = "Poca agua" }
    else if (agua === 2) { cantidadAgua = "Agua media" }
    else { cantidadAgua = "Mucha agua" }

    let cantidadFrio = "";
    const frio = props.dataTabs.frio;
    if (frio === 0) { cantidadFrio = "Cálida" }
    else if (frio === 1) { cantidadFrio = "Poco frío" }
    else if (frio === 2) { cantidadFrio = "Frío medio" }
    else if (frio === 3) { cantidadFrio = "Resistente" }

    return (
        <div className="card-cell cell-cuidados">
            <div className='care-content'>
                <div className='care-icons'>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/icons/icon-sol-${luz}.svg`} alt={cantidadLuz} title={cantidadLuz} />
                    <div>{cantidadLuz}</div>
                </div>
                <div className='care-icons'>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/icons/icon-agua-${agua}.svg`} alt={cantidadAgua} title={cantidadAgua}/>
                    <div>{cantidadAgua}</div>
                </div>
                <div className='care-icons'>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/icons/icon-frio-${frio}.svg`} alt={cantidadFrio} title={cantidadFrio} />
                    <div>{cantidadFrio}</div>
                </div>
            </div>
        </div>
    )
}
