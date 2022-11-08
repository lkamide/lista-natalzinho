import React, { Component } from "react";
import { Grid, Column, AspectRatio, Button } from "carbon-components-react";
import './style.css'

function ListComponent() {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <>
          {/* <h1>TESTE DE NAVEGAÇÃO</h1> */}
          <Grid>
            <Column sm={1} md={2} lg={4}>
              <AspectRatio ratio="1x1" >
               <img className="photos" src='https://imgcentauro-a.akamaihd.net/900x900/97366302A4/bolsa-adidas-organizer-logo-adulto-img.jpg' />
               <div >
        
                <Button kind="tertiary" className="btn-site" target="_blank" href="https://www.centauro.com.br/bolsa-adidas-organizer-logo-adulto-973663.html#cor=02" >
                  Ir ao site
                </Button>
               </div>
              </AspectRatio>
            {/* </Column>
            <Column sm={1} md={2} lg={4}>
              <AspectRatio ratio="1x2">  <img src='https://imgcentauro-a.akamaihd.net/900x900/97366302A4/bolsa-adidas-organizer-logo-adulto-img.jpg' />
                https://www.centauro.com.br/bolsa-adidas-organizer-logo-adulto-973663.html#cor=02
                <Button kind="tertiary" >
                  Ir ao site
                </Button></AspectRatio>
            </Column>
            <Column sm={1} md={2} lg={4}>
              <AspectRatio ratio="1x1">  <img src='https://imgcentauro-a.akamaihd.net/900x900/97366302A4/bolsa-adidas-organizer-logo-adulto-img.jpg' />
                https://www.centauro.com.br/bolsa-adidas-organizer-logo-adulto-973663.html#cor=02
                <Button kind="tertiary" onClick={()=> window.location.href = 'https://google.com.br'  } >
                  Ir ao site
                </Button></AspectRatio>
            </Column>
            <Column sm={1} md={2} lg={4}>
              <AspectRatio ratio="1x1">  <img src='https://imgcentauro-a.akamaihd.net/900x900/97366302A4/bolsa-adidas-organizer-logo-adulto-img.jpg' />
                https://www.centauro.com.br/bolsa-adidas-organizer-logo-adulto-973663.html#cor=02
                <Button kind="tertiary" >
                  Ir ao site
                </Button></AspectRatio> */}
            </Column>
          </Grid>
        </>
      );
    }
  };
}

export default ListComponent();
