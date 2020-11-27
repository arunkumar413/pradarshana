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

export default function Slide1() {
  return (
    <Animated animationIn={config.slideAnimationIn} animationOut={config.slideAnimationOut} isVisible={true}>
      <Box p={1} my={1} display="flex" justifyContent='center'>

        <Typography variant="h1" align="center">
          Welcome to slides!{" "}
        </Typography>
      </Box>
      <Box className='test'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        alignContent='stretch'
        alignItems='stretch'>
        <Box p={2} m={1} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />
          <Typography variant="h3">

            Code based presentation tool
          </Typography>
        </Box>


        <Box p={1} m={1} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />
          <Typography variant="h3">
            Create presentations using CSS, CSS animations, HTML, Material UI
            and beatutiful colors{" "}
          </Typography>
        </Box>
        <Box p={2} m={1} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />

          <Typography variant="h3"> Lets make web beautiful</Typography>
        </Box>{" "}
      </Box>
    </Animated>
  );
}
