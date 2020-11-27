import {graphItems, graphStyle, graphLayOut} from './graphConfig'



import  cytoscape  from 'cytoscape'
import React, { useState, useEffect, useRef } from 'react'




export default function Graph() {
  const cyRef = useRef()


  useEffect(function () {
    const config = {

      container: cyRef.current,
      elements: graphItems,

      style: graphStyle,

      layout: graphLayOut

    }

    cytoscape(config)


  }, [])



  return (
    <div ref={cyRef} id="cy" style={{width:600, height:600 }}>



    </div>
  )
}


