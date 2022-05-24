export const TabPhoto = (props) => {
    
    return (
          <div className="card-cell cell-image">
                {props.newPrice && <div className='card-oferta'>OFERTA {Math.round(props.tantoX100)}%</div>}
                <img src={`${process.env.PUBLIC_URL}/assets/img/${props.dataTabs.image}`} alt={props.dataTabs.title} width='200px' height='300px' className='card-img' />
            </div>
      );
  };