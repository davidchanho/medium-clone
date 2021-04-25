import React from "react";
import { Button } from "react-bootstrap";

function LandingHero() {
  return (
    <div className='bg-yellow'>
      <h4>Where good ideas find you</h4>

      <p>Read and share new perspectives on just about any topic.</p>
      <p>
        Everyone's welcome. <a href="#!">Learn more.</a>
      </p>

      <Button>Get Started</Button>
    </div>
  );
}

export default LandingHero;
