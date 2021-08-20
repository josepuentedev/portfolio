import React from "react";

import ProjectOne from "../assets/project-1.png";
import ProjectTwo from "../assets/project-2.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="row">
        <div className="col s12 m8 offset-m2 l4">
          <div className="card project z-depth-2">
            <img
              src={ProjectOne}
              alt="A 404 page project"
              className="responsive-img"
            />
            <div className="techs">
              <span>#HTML</span>
              <span>#CSS</span>
              <span>#Responsive</span>
            </div>
            <h4 className="title">404 Not Found</h4>
            <p className="description">
              In this project, I work with HTML and CSS to create a responsive
              page. This page is similiar with a page. The design is from
              devchallenge.io
            </p>
            <div className="row">
              <div className="col s6">
                <a
                  href="http://notfound.surge.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo"
                >
                  Demo
                </a>
              </div>
              <div className="col s6">
                <a
                  href="https://github.com/josepuentedev/not-found"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m8 offset-m2 l4">
          <div className="card project z-depth-2">
            <img
              src={ProjectTwo}
              alt="A 404 page project"
              className="responsive-img"
            />
            <div className="techs">
              <span>#HTML</span>
              <span>#CSS</span>
              <span>#Responsive</span>
            </div>
            <h4 className="title">My Team Page</h4>
            <p className="description">
              In this project, I work with HTML and CSS to create a responsive
              page. This page is similiar with a page. The design is from
              devchallenge.io
            </p>
            <div className="row">
              <div className="col s6">
                <a
                  href="http://notfound.surge.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo"
                >
                  Demo
                </a>
              </div>
              <div className="col s6">
                <a
                  href="https://github.com/josepuentedev/not-found"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m8 offset-m2 l4">
          <div className="card project z-depth-2">
            <img
              src={ProjectTwo}
              alt="A 404 page project"
              className="responsive-img"
            />
            <div className="techs">
              <span>#HTML</span>
              <span>#CSS</span>
              <span>#Responsive</span>
            </div>
            <h4 className="title">My Team Page</h4>
            <p className="description">
              In this project, I work with HTML and CSS to create a responsive
              page. This page is similiar with a page. The design is from
              devchallenge.io
            </p>
            <div className="row">
              <div className="col s6">
                <a
                  href="http://notfound.surge.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo"
                >
                  Demo
                </a>
              </div>
              <div className="col s6">
                <a
                  href="https://github.com/josepuentedev/not-found"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
