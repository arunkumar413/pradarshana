import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { Gradient } from '@material-ui/icons';
import React  from 'react'
import Gradients from '../styles/webGradients.module.css'


export default function GradientsDemo(props) {
var elements = Object.keys(Gradients).map(function (e, i) {
        return (
            <Grid item xs={12} sm={2} md={4} lg={3} key={i}            >
                <Box
                    display='flex'
                    className={Gradients[e] + " element"}
                    justifyContent='center'
                    p={1}
                    alignItems='center'
                    style={{ height: 100 }}>
                    <Typography variant='h4' align='center'>
                        {e}
                    </Typography>
                </Box>


            </Grid>
        );
    });

    return (
        <div> 
        <Typography align='center' variant='h5'>Copy the text in the gradient box and apply it as a className in the config.js file  </Typography>
        <Grid container spacing={2} className="gradient">{elements} </Grid>
        </div>

    )

}