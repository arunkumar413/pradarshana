import React, { useState, useEffect } from 'react'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'

import { makeStyles } from '@material-ui/core/styles';


import GradientsDemo from './templates/GradientsDemo'
import TextGradientsDemo from './templates/textGradientsDemo'
import './styles/styles.css'
import './styles/textGradients.css'
import './styles/webGradients.css'
import textGradients from './styles/textGradients.module.css'
import webGradients from './styles/webGradients.module.css'

const config = {
  deckItems: [

    { component: <Slide1 />, title: "Welcome to slide1" },  // title of the slide show up in the footer section 
    { component: <Slide2 />, title: "Welcome to Slide2 " },
    { component: <Slide3 />, title: "Welcome to Slide3 " },
    { component: <Slide4 />, title: "Welcome to Slide4 " },
    { component: <Slide5 />, title: "Welcome to Slide5 " },
    // { component: <TextGradientsDemo />, title: "Text gradients demo " }, // View this slide to select the classname for your text gradient. 
    // { component: <GradientsDemo />, title: "Background gradients demo " },  // View this slide to select background class name. After selecting the background classname, apply it below for slideBackgroundClassName and comment this line.

  ],
  templates: [],
  slideBackgroundClassName: webGradients.sharp_blues,  // put the classname selected by previewing the GradientsDemo here
  slideContrastColor: "#fff", //textGradients.deep_blue , // Select an appropriate constrasting color for slide text
  slideTextGradient: textGradients.fabled_sunset,  // select gradient for Text
  slideAnimationIn: "zoomIn",
  slideAnimationOut: 'zoomOut'
}


export { config }