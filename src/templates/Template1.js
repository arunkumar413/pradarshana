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
  
  export default function Template1() {
    return (
      <Box>
        <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
          <Typography variant="h1" align="center">
            Welcome to slides!{" "}
          </Typography>
  
          <Box p={2} m={3} display="flex" alignItems="flex-start">
            <Brightness1Icon style={{ padding: 20 }} />
            <Typography variant="h3">
            
          Code based presentation tool
            </Typography>
          </Box>
  
  
          <Box p={2} m={3} display="flex" alignItems="flex-start">
            <Brightness1Icon style={{ padding: 20 }} />
            <Typography variant="h3">
              Create presentations using CSS, CSS animations, HTML, Material UI
              and beatutiful colors{" "}
            </Typography>
          </Box>
          <Box p={2} m={3} display="flex" alignItems="flex-start">
            <Brightness1Icon style={{ padding: 20 }} />
  
            <Typography variant="h3"> Lets make web beautiful</Typography>
          </Box>{" "}
        </Animated>
      </Box>
    );
  }
  