const graphLayOut= {
    name: 'grid',
    rows: 2,
    columns:2
  }


  const graphStyle = [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': 'yellow',
        'label': 'data(id)',
				'width': '100px',
				'height': '100px',
				'shape':'round-rectangle',
				'text-halign': 'center',
				'text-valign':'center' ,
				'font-family': 'sans-serif',
				'font-size': 56,
				'color': 'green'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': 'white',
        'target-arrow-color': 'red',
        'target-arrow-shape': 'triangle',
        'curve-style': 'taxi',
				'arrow-scale': 4
      }
    }
  ]

  const graphItems = [ // list of graph elements to start with
    { 
      data: { id: 'A' }
    },
    { 
      data: { id: 'B' }
    },
         { 
      data: { id: 'C' }
    },
    { // edge ab
      data: { id: 'AB', source: 'A', target: 'B' }
    },
         { // edge ac
      data: { id: 'AC', source: 'A', target: 'C' }
    }
  ]



  export {graphLayOut, graphItems, graphStyle}