import SwitchButton from "./SwitchButton"

export const BotonesScreen = () => {
  return (
    <div  className="cont">
        <h1>Botones</h1>
        <section>
          <h2>Botones standar</h2>
          <div className="btn-recipient">
            <a href="#" className="ttn-btn">Enlace</a>
            <button type="button"  className="ttn-btn">Botón</button>

            <button type="button"  className="ttn-btn ttn-btn-primary">Botón principal</button>

            <button type="button"  className="ttn-btn ttn-btn-dashed">Bottón dashed</button>

            <button type="button"  className="ttn-btn ttn-btn-text">Text Bottón</button>

            <button type="button"  className="ttn-btn ttn-link">Bottón link</button>
          </div>
        </section>
        <section className="background-nature">
          <h2>Botones transparentes</h2>
          <div className="btn-recipient">
            <button type="button"  className="ttn-btn ttn-btn-trans">Botón</button>

            <button type="button"  className="ttn-btn ttn-btn-primary ttn-btn-trans">Botón principal</button>

            <button type="button"  className="ttn-btn ttn-btn-dashed ttn-btn-trans">Bottón dashed</button>

            <button type="button"  className="ttn-btn ttn-btn-text ttn-btn-trans">Text Bottón</button>

            <button type="button"  className="ttn-btn ttn-link ttn-btn-trans">Bottón link</button>
          </div>
        </section>
        <section>
          <h2>Botones disabled</h2>
          <div className="btn-recipient">
            <a href="#" className="ttn-btn">Enlace</a>
            <a href="#" className="ttn-btn ttn-btn-disabled">Enlace (disabled)</a> 
            
            <button type="button"  className="ttn-btn ">Botón</button> 
            <button type="button"  className="ttn-btn ttn-btn-disabled">Botón (disabled)</button>

            <button type="button"  className="ttn-btn ttn-btn-primary">Botón principal</button> 
            <button type="button"  className="ttn-btn ttn-btn-primary ttn-btn-disabled">Botón principal (disabled)</button>

            <button type="button"  className="ttn-btn ttn-btn-dashed">Bottón dashed</button>
            <button type="button"  className="ttn-btn ttn-btn-dashed ttn-btn-disabled">Bottón dashed (disabled)</button>

            <button type="button"  className="ttn-btn ttn-btn-text">Text Bottón</button>
            <button type="button"  className="ttn-btn ttn-btn-text ttn-btn-disabled">Text Bottón (disabled)</button>

            <button type="button"  className="ttn-btn ttn-link">Bottón link</button>
            <button type="button"  className="ttn-btn ttn-link ttn-btn-disabled">Bottón link (disabled)</button>
          </div>
        </section>
        <section>
          <h2>Botones redondeados</h2>
          <div className="btn-recipient  ttn-btn-rounded">
            <button type="button"  className="ttn-btn ttn-btn-rounded">Botón</button>

            <button type="button"  className="ttn-btn ttn-btn-primary ttn-btn-rounded">Botón principal</button>

            <button type="button"  className="ttn-btn ttn-btn-dashed ttn-btn-rounded">Bottón dashed</button>
          </div>
        </section>
        <section>
          <h2>Botones block</h2>
          <div className="btn-recipient  ttn-btn-rounded">
            <div className="btn-mark">
              <button type="button"  className="ttn-btn ttn-btn-block">Botón</button>

              <button type="button"  className="ttn-btn ttn-btn-primary ttn-btn-block">Botón principal</button>

              <button type="button"  className="ttn-btn ttn-btn-dashed ttn-btn-block">Bottón dashed</button>
            </div>
          </div>
        </section>
        <section>
          <h2>Tamaño de Botones</h2>
          <h3>Large</h3>
          <div className="btn-recipient">
            
            <button type="button"  className="ttn-btn ttn-btn-lg">Botón</button>

            <button type="button"  className="ttn-btn ttn-btn-primary big ttn-btn-lg">Botón principal</button>

            <button type="button"  className="ttn-btn ttn-btn-dashed big ttn-btn-lg">Bottón dashed</button>

            <button type="button"  className="ttn-btn ttn-btn-text big ttn-btn-lg">Text Bottón</button>

            <button type="button"  className="ttn-btn ttn-link big ttn-btn-lg">Bottón link</button>
          </div>
          <h3>Default</h3>
          <div className="btn-recipient">
            
            <button type="button"  className="ttn-btn">Botón</button>

            <button type="button"  className="ttn-btn ttn-btn-primary ">Botón principal</button>

            <button type="button"  className="ttn-btn ttn-btn-dashed ">Bottón dashed</button>

            <button type="button"  className="ttn-btn ttn-btn-text">Text Bottón</button>

            <button type="button"  className="ttn-btn ttn-link">Bottón link</button>
          </div>
          <h3>Small</h3>
          <div className="btn-recipient">
            
            <button type="button"  className="ttn-btn ttn-btn-sm">Botón</button>

            <button type="button"  className="ttn-btn ttn-btn-primary ttn-btn-sm">Botón principal</button>

            <button type="button"  className="ttn-btn ttn-btn-dashed  ttn-btn-sm">Bottón dashed</button>

            <button type="button"  className="ttn-btn ttn-btn-text  ttn-btn-sm">Text Bottón</button>

            <button type="button"  className="ttn-btn ttn-link  ttn-btn-sm">Bottón link</button>
          </div>
        </section>
        <section>
        <h2>Iconos</h2>
          <div className="btn-recipient">
            <button type="button"  className="ttn-btn ttn-btn-icon ttn-btn-icon-download">Botón descarga</button>

            <button type="button"  className="ttn-btn ttn-btn-primary ttn-btn-icon ttn-btn-icon-loading">Botón cargando</button>

            <button type="button"  className="ttn-btn ttn-btn-dashed ttn-btn-icon ttn-btn-icon-search">Bottón búsqueda</button>

            <button type="button"  className="ttn-btn ttn-btn-text ttn-btn-icon ttn-btn-icon-exit">Bottón salir</button>

          </div>
        </section>
        <section>
          <h2>Danger</h2>
          <div className="btn-recipient">
            <button type="button"  className="ttn-btn  ttn-btn-outline-danger">Botón</button>

            <button type="button"  className="ttn-btn  ttn-btn-danger">Botón principal</button>

            <button type="button"  className="ttn-btn ttn-btn-dashed ttn-btn-danger">Bottón dashed</button>

            <button type="button"  className="ttn-btn ttn-btn-text ttn-btn-danger">Text Bottón</button>

            <button type="button"  className="ttn-btn ttn-link ttn-btn-danger">Bottón link</button>
          </div>
        </section>
        <section>
          <h2>Botones animados</h2>
          <div className="btn-recipient">
            <button type="button"  className="ttn-btn ttn-btn-animated ttn-animated-next">Siguiente</button>

            <button type="button"  className="ttn-btn ttn-btn-animated ttn-animated-añadir">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </button>

            <button type="button"  className="ttn-btn ttn-btn-animated ttn-animated-download">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896">
                <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
            </svg>
            </button>

            <button type="button"  className="ttn-btn ttn-btn-animated ttn-animated-exit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" >
              <path d="M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z" />
            </svg>
            </button>

          </div>
          <h2>Botones animados</h2>
          <div className="btn-recipient">
            <SwitchButton  claseUnactive='ttn-btn-primary' claseActive='ttn-btn-disabled' textUnactive='Vótanos' textActive='Gracias!' />

            <SwitchButton  claseUnactive='ttn-btn-icon ttn-btn-icon-search'  claseActive=' ttn-btn-primary ttn-btn-icon ttn-btn-icon-loading' textUnactive='Buscar' textActive='Buscando...'/>
          </div>
        </section>
    </div>
  )
}
