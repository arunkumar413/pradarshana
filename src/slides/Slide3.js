import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import { Typography, Box } from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import ReactPrism from '@versant-digital/react-prismjs';



export default function Slide3() {
  return (
    <Box>
      <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>

        <Box p={2} m={4} display="flex" justifyContent='center' alignItems="flex-start">
          <Typography variant="h1" align="center">
            A typical slide content
        </Typography>

        </Box>




        <Box p={2} m={1} display="flex" justifyContent='center' alignItems="flex-start">

        <ReactPrism language="javascript">
          {` <Box>
      <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
        <Typography variant="h1" align="center"> Welcome to slides!  </Typography>

        <Box p={2} m={3} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />
          <Typography variant="h3">  Code based presentation tool </Typography>
        </Box>


        <Box p={2} m={3} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />
          <Typography variant="h3"> Create presentations using CSS, CSS animations, HTML, Material UI and beatutiful colors{" "}
          </Typography>
        </Box>

        <Box p={2} m={3} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />
          <Typography variant="h3"> Lets make web beatutiful</Typography>
    </Box>

      </Animated>
    </Box> `}
        </ReactPrism>
        </Box>

      </Animated>
    </Box>
  );
}
