import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import { Typography, Box } from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";

export default function Slide2() {
  return (
    <Box>
      <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
        <Typography variant="h1" align="center">
          Use cases
        </Typography>
        <Box p={2} m={1} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />

          <Typography variant="h3"> Simple yet high quality presentations </Typography>
        </Box>{" "}

        <Box p={1} m={1} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />
          <Typography variant="h3">Education Apps</Typography>
        </Box>
        <Box p={1} m={1} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />

          <Typography variant="h3"> Embedd Video, 3d objects, images </Typography>
        </Box>{" "}

        <Box p={1} m={1} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />

          <Typography variant="h3"> Developer friendly </Typography>
        </Box>{" "}

        <Box p={1} m={1} display="flex" alignItems="flex-start">
          <Brightness1Icon style={{ padding: 20 }} />

          <Typography variant="h3"> No need to drag and adjust the postion. Just use the CSS utility classes </Typography>
        </Box>{" "}


      </Animated>
    </Box>
  );
}
