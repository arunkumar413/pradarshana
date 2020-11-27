import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {config} from './config'
import './styles/styles.css'
import  './styles/textGradients.css'
import  './styles/webGradients.css'
import textGradients from './styles/textGradients.module.css'
import webGradients from './styles/webGradients.module.css'

import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from './slides/Slide4';
import {webGradients2} from './styles/webGradients2'

import { Box, Grid, Typography } from "@material-ui/core";
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // console.log(textGradients)
  // console.log(webGradients)

  console.log(webGradients2)

  

  var slides = config.deckItems

  return (
    <div className={config.slideBackgroundClassName} style={{minHeight:'100vh', color:config.slideContrastColor}} >
    
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        style={{minHeight:'95vh'}}
        >
        <Grid xs={12} item>{slides[currentSlide].component}</Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems='center'
          style={{padding: 8}}
        >
          <Grid item>
            <Typography variant="caption">
              {slides[currentSlide].title}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="caption">
              {" "}
              {currentSlide + 1 + "/" + slides.length + "slides"}
            </Typography>
          </Grid>

          <Grid item>
            <ArrowBackIosIcon
              color="primary"
              fontSize="large"
              onClick={() =>
                currentSlide == 0
                  ? setCurrentSlide(0)
                  : setCurrentSlide(currentSlide - 1)
              }
            />
          </Grid>

          <Grid item>
            <ArrowForwardIosIcon
              color="primary"
              fontSize="large"
              onClick={() =>
                currentSlide === slides.length - 1
                  ? setCurrentSlide(slides.length - 1)
                  : setCurrentSlide(currentSlide + 1)
              }
            />
          </Grid>
        </Grid>
    </div>
  );
}



