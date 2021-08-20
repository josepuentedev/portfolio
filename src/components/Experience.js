import React from "react";
import Vortex from "../assets/vortex.png";
import Municipalidad from "../assets/municipalidad.jpeg";

const Experience = () => {
  return (
    <div className="card experience z-depth-2">
      <h2 className="title">Work Experience</h2>
      <div className="row">
        <div className="col l4 m6 offset-m3 s12 item offset-l2">
          <div className="col s3">
            <img src={Vortex} alt="Vortex's logo" className="responsive-img" />
          </div>
          <div className="col s9">
            <p className="worked-time">Jul 2021 - Current</p>
            <h5 className="job">Fullstack developer</h5>
            <p className="description">
              Desarrollador fullstack, manejando tecnologias tales como React, React Native, Java con Jersey y JPA, Oracle. 
              <br />
              Entre otras tecnologias.
            </p>
          </div>
        </div>
        <div className="col l4 m6 offset-m3 s12 item">
          <div className="col s3">
            <img src={Municipalidad} alt="MSMT's logo" className="responsive-img" />
          </div>
          <div className="col s9">
            <p className="worked-time">Feb 2021 - Jun 2021</p>
            <h5 className="job">Fullstack developer</h5>
            <p className="description">
              Desarrollo de sistemas administrativos con tecnologias tales como React, React Native, DotNet, Node.Js y BBDD tales como Postgres y Mysql.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
