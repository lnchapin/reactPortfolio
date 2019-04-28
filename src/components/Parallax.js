import React from "react";
import { Parallax } from 'react-materialize';


const ParallaxSection = props => {
  return (
    <Parallax imageSrc={props.src} />
  )
}

export default ParallaxSection;
