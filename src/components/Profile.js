import React from "react";
import Image from "../assets/profile.png";

const Profile = () => {
  return (
    <main className="card profile z-depth-2">
      <div className="row">
        <div className="col l3 m6 s12 offset-m3">
          <img
            src={Image}
            alt="Juan Jose Puente Scapolatempo"
            className="responsive-img"
          />
        </div>
        <div className="col l9 s12">
          <div className="col l7 m6 s12">
            <h1 className="title">Juan Jose Puente S.</h1>
            <h3 className="subtitle">Full-Stack Developer</h3>
          </div>
          <div className="col l5 m6 s12">
            <p className="info-contact">jpuentescapolatempo@gmail.com</p>
            <p className="info-contact">(+54) 9 381 368-6040</p>
          </div>
          <div className="col l12 s12">
            <p className="about">
              Desarrollador fullstack con un amplio abanico de tecnologias para
              la resolucion de problemas y desarrollo de aplicaciones.
            </p>
            <p className="about">
              Actualmente buscando desafios y oportunidades de desarrollo tanto en el ambito profesional como personal.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
