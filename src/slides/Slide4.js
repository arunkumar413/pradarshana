import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import { Typography, Box } from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import ReactPrism from '@versant-digital/react-prismjs';



export default function Slide4() {
  return (
    <Box>
      <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
      <Box p={2} m={4} display="flex" alignItems="flex-start" justifyContent='center'>

        <Typography variant="h1" align="center">
          Use material UI components
        </Typography>
        </Box>


        <Box p={2} m={3} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />
          <Typography variant="h3">  Use material UI {"<Box> </Box>"} component for styling, aligning, justifying the slide elements </Typography>
        </Box>

        <Box p={2} m={3} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />
          <Typography variant="h3">  Use material UI Icons for bullets, etc,.</Typography>
        </Box>

      </Animated>
    </Box>
  );
}
