import React, { useState } from "react";
import { TabCare } from "./TabCare";
import { TabDescription } from "./TabDescription";
import { TabPhoto } from "./TabPhoto";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };
  const newPrice = props.dataTabs.newPrice;
  const oldPrice = props.dataTabs.price;
  const tantoX100 = 100 - (100 * newPrice / oldPrice);

  return (
    <div className="tabs">
      {/* Tab nav */}
      <ul className="tabs-nav">
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Foto</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Cuidados</li>
        <li className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>Descripción</li>
      </ul>
      <div className={`tabs-content ${activeTab}`}>
        <h3 className="cell-title">{props.dataTabs.title}</h3>
        {/* content will be shown here */}
        <TabPhoto dataTabs={props.dataTabs} newPrice={newPrice} tantoX100={tantoX100}/>
        <TabCare dataTabs={props.dataTabs} />
        <TabDescription dataTabs={props.dataTabs} />
        <div className='card-cell cell-price'>
          <div className={newPrice ? 'price oferta' : 'price'} >
            {newPrice && <div className='old-price'>{oldPrice}€</div>}
            <div>
              <span className='euros'>{props.dataTabs.entero}</span><span className='decimales'>{props.dataTabs.decimales}€</span>
            </div>
          </div>
          <button className='ttn-btn ttn-btn-primary ttn-btn-rounded'>Comprar</button>
        </div>
      </div>
    </div>
  );
};
export default Tabs;