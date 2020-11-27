import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import { Typography, Box } from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import ReactPrism from '@versant-digital/react-prismjs';
import cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import Graph from "../graphs/Graph";

export default function Slide5() {




  return (
    <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
      <Box p={2} m={4} display="flex" alignItems="center" justifyContent='center'>

        <Typography variant="h2" align="center">
          Cytoscape for Graphs and Visualization
        </Typography>
      </Box>
      <Box p={2} m={4} display="flex" alignItems="center" justifyContent='center'>

        <Typography variant="h6" align="center">
          https://js.cytoscape.org/</Typography>
      </Box>


      <Box p={2} m={1} display="flex" alignItems="center" justifyContent='center'>
        <Graph />
      </Box>



    </Animated>
  );
}
