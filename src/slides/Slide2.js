import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import '../styles/textGradients.css'
import { config } from '../config'


const slideStyle = {
  color: "#fff",
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

export default function Slide2() {
  return (
    <Animated animationIn={config.slideAnimationIn} animationOut={config.slideAnimationOut} isVisible={true}>

      <div style={slideStyle} >
        <h3> Slide 2 </h3>
      </div>
    </Animated>

  );
}
