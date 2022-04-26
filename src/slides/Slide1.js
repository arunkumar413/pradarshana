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


const slideContentStyle = {
  color: "#fff",
  lineHeight: '2rem',
  fontSize: '1.5rem'
}

const slideTitleStyle = {
  color: "#fff",
  textAlign: 'center',
  fontSize: '2.5rem'


}

export default function Slide1() {
  return (
    <Animated animationIn={config.slideAnimationIn} animationOut={config.slideAnimationOut} isVisible={true}>
      <div style={slideTitleStyle} className='slide-title' >
        <h1> A new presentatin tool for a new Web </h1>
      </div>

      <div className="slide-content" style={slideContentStyle} >
        <h2> &bull;
          Welcome to the next generation presentation tool  </h2>
        <h2> &bull;
          A simple presentation tool based on HTML and CSS  </h2>
        <h2> &bull;
          Developer friendly </h2>
        <h2>&bull; Use full power of HTML and CSS </h2>
        <h2>&bull; Use Icons from various icon providers </h2>
        <h2>&bull; Build education apps, tutorials, documentaiton etc,. </h2>
        <h2>&bull; CSS animations similar to other presentation tools </h2>
        <h2>&bull; Embedd 3d objects</h2>

      </div>




    </Animated >

  );
}
