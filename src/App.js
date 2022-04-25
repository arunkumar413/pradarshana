import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { config } from './config'
import './styles/styles.css'
import './styles/textGradients.css'
import './styles/webGradients.css'
import textGradients from './styles/textGradients.module.css'
import webGradients from './styles/webGradients.module.css'
import { Animated } from "react-animated-css";


import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from './slides/Slide4';
import { webGradients2 } from './styles/webGradients2'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // console.log(textGradients)
  // console.log(webGradients)

  console.log(webGradients2)


  function handleDecrement() {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1)

    }

  }

  function handleIncrement() {
    let deckLastIndex = config.deckItems.length - 1
    if (currentSlide < deckLastIndex) {
      setCurrentSlide(currentSlide + 1)

    }

  }


  var slides = config.deckItems

  return (

    <div className={config.slideBackgroundClassName + " " + 'presentationContainer'} >

      <div className="slideItem">



        {slides[currentSlide].component}
      </div>

      <div className="footer">


        <h5 onClick={handleDecrement} > {"<"} </h5>
        <p>  {slides[currentSlide].title} </p>
        <h5 onClick={handleIncrement}> {">"} </h5>
      </div>



    </div>

  );
}



