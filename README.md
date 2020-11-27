## A Material UI and reactjs based presentation tool (Demo: https://u3g6h.csb.app/ )

1) Put all your slides in the ` slides ` directory.

2) Any templates that you make would go into ` templates ` directory.

3) All the heavy lifing is done. Just use ` <Box> <Grid> <Typography> ` components in the slides to create slide content.

4) Use the `config.js` file to configure the presentation.

5) Use the `<GradentsDemo>` template slide to preview the backgrounds for the presentation. Choose an appropriate classname and apply it on ` slideBackgroundClassName ` in the config.js file.

6) Similarly use the ` <TextGradientsDemo> ` template to preview the text gradients. Choose the class name and apply it on ` slideTextGradient `


Example: 

```
 
slideBackgroundClassName: webGradients.sharp_blues,
slideTextGradient: textGradients.fabled_sunset, 

   ```

Below is the configuration of the presentation.

```
const config = {
  deckItems:[

    // { component: <TextGradientsDemo />, title: "Text gradients demo " }, 
   // { component: <GradientsDemo />, title: "Background gradients demo " },
    { component: <Slide1 />, title: "Welcome to slide1" },
    { component: <Slide2 />, title: "Welcome to Slide2 " },
    { component: <Slide3 />, title: "Welcome to Slide3 " },
    { component: <Slide4 />, title: "Welcome to Slide4 " },
    { component: <Slide5 />, title: "Welcome to Slide4 " },
  ], 

  templates: [],

  slideBackgroundClassName: webGradients.sharp_blues, 
  slideContrastColor: "#fff", //textGradients.deep_blue 
  slideTextGradient: textGradients.fabled_sunset, 
  slideAnimationIn: "zoomIn",
  slideAnimationOut:'zoomOut'
}


```








