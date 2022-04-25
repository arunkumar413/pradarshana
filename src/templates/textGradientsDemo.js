import React, { useState, useEffect, useRef } from 'react'
import { Box, Grid, Typography } from '@material-ui/core';
import { Gradient, PostAdd } from '@material-ui/icons';
import Gradients from '../styles/webGradients.module.css'
import textGradients from '../styles/textGradients.module.css';


const gradientDivStyle = {
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 0.5px, rgb(209, 213, 219) 0px 0px 0px 0.5px inset',
    border: 'solid 0.5px grey',
    borderRadius: 10,
    textAlign: 'center',
    padding: 5,
    margin: 5
}


export default function TextGradientsDemo(props) {


    var elements = Object.keys(textGradients).map(function (e, i) {
        return (
            <div key={i.toString()} style={gradientDivStyle}            >

                <h2 className={textGradients[e]}>
                    {'.' + e}
                </h2>


            </div>
        );
    });

    return (
        <div>
            <h4 > Text Gradients.Copy the className below and use it anywhere in your slide components </h4>
            <div className='textGradientsContainer'>
                {elements}
            </div>
        </div >

    )

}