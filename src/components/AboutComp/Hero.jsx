import React from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="heroMain d-flex min-vh-100">
      <Container className="align-self-center text-center text-light col-md-8 offset-md-2">
        <div className="lc-block mb-4">
          <div editable="rich">
            <h1 className="display-1 fw-bolder">About US</h1>
          </div>
        </div>

        <div className="lc-block">
          <div editable="rich">
            <p className="lead">
                Get to know about our team
            </p>

            <p className="lead">And their role in this project</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
