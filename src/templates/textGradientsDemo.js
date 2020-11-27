import React, { useState, useEffect, useRef } from 'react'
import {Box, Grid, Typography } from '@material-ui/core';
import { Gradient } from '@material-ui/icons';
import Gradients from '../styles/webGradients.module.css'
import textGradients from '../styles/textGradients.module.css';


export default function TextGradientsDemo(props) {


    var elements = Object.keys(textGradients).map(function (e, i) {
        return (
            <Grid item xs={12} sm={4} md={4} lg={4} key={i}            >
                <Box
                    display='flex'
                    className="element"
                    justifyContent='center'
                    p={1}
                    alignItems='center'>
                    <Typography className={textGradients[e]} variant='h2' align='center'>
                        {e}
                    </Typography>
                </Box>


            </Grid>
        );
    });

    return (
        <div> 
        <Typography align='center' variant='h5'>Copy the text in the gradient box and apply it in the config.js file </Typography>
        <Grid container spacing={2} className="gradient">{elements} </Grid>
        </div>

    )

}