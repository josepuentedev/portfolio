import React from "react";
import UTN from "../assets/utn.jpeg";
import Henry from "../assets/henry.jpeg";
import FCC from "../assets/freecodecamp.jpeg";

const Academic = () => {
  return (
    <div className="card academic z-depth-2">
      <h2 className="title">Academic</h2>
      <div className="row">
        <div className="col l4 m6 offset-m3 s12 item">
          <div className="col s3">
            <img src={UTN} alt="UTN's logo" className="responsive-img" />
          </div>
          <div className="col s9">
            <p className="worked-time">Jul 2021 - Current</p>
            <h5 className="job">Tecnico Programador</h5>
            <p className="description">
              Tecnico programador universitario.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates necessitatibus.
            </p>
          </div>
        </div>
        <div className="col l4 m6 offset-m3 s12 item">
          <div className="col s3">
            <img src={Henry} alt="Henry's logo" className="responsive-img" />
          </div>
          <div className="col s9">
            <p className="worked-time">Feb 2021 - Jun 2021</p>
            <h5 className="job">Fullstack Developer</h5>
            <p className="description">
              Desarrollador Fullstack Javascript
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates necessitatibus.
            </p>
          </div>
        </div>
        <div className="col l4 m6 offset-m3 s12 item">
          <div className="col s3">
            <img src={FCC} alt="FCC's logo" className="responsive-img" />
          </div>
          <div className="col s9">
            <p className="worked-time">Feb 2021 - Jun 2021</p>
            <h5 className="job">Fullstack developer</h5>
            <p className="description">
            Desarrollador Fullstack Javascript y Python
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates necessitatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
