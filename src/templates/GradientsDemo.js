import React, { useState, useEffect, useRef } from 'react'
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


export default function GradientsDemo(props) {


    var elements = Object.keys(Gradients).map(function (e, i) {
        return (
            <div key={i.toString()} style={gradientDivStyle} className={Gradients[e]}            >

                <h2>
                    {'.' + e}
                </h2>


            </div>
        );
    });

    return (
        <div>
            <h4 > Background gradients. Copy the className below and use it anywhere in your slide components </h4>
            <div className='textGradientsContainer'>
                {elements}
            </div>
        </div >

    )

}