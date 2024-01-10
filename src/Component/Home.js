import React from "react";
import "./Home.css";
import homeImage from "./home.jpg";
import Product from "./Product";
import pavilion from "./pavilion.jpg"
import hplatest from "./hplatest.jpg"
import desktop from "./desktop.jpg"
import monitor from "./monitor.jpg"
import security from "./security.jpg"
import gaming from "./geming.jpg"


export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={homeImage} />
        <div className="home__row">
          <Product
            id="12321341"
            title="TOUCH-SCREEEN ALL-IN-ONE INTEL IRIS CORE i7-16GB MEMORY 1TB SSD-SPARKLING BLACK"
            price={1399.99}
            rating={5}
            image={pavilion}
          />
          <Product
            id="49538094"
            title="HP OMEN-40L GAMING DESKTOP-AMD RYZEN 7 7700-16GB DDR5 MEMORY-NIVIDIA GEFORCE RTX 4060 TI-1TB SSD-BLACK"
            price={1900}
            rating={5}
            image={gaming}
          />
        
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="HP-ENVY DESKTOP-INTEL  CORE i7-32GB MEMORY"
            price={1399.99}
            rating={5}
            image={hplatest}
          />
          <Product
            id="23445930"
            title="HP-27"
            IPS
            LED
            FHD
            Freesync
            price={129.99}
            rating={5}
            image={desktop}
          />
          <Product
            id="3254354345"
            title="LOGITECH-MK540"
            price={40}
            rating={5}
            image={monitor}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="LOGITECH-STREAMCAM 1080 WEBCAM"
            price={169.99}
            rating={5}
            image={security}
          />
        </div>
      </div>
    </div>
  );
}
