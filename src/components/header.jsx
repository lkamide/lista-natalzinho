import React, { Component } from 'react';
import { HeaderName, Header, Row } from 'carbon-components-react';
import './style.css'

function HeaderComponent() {
  return class extends Component {


    render() {
      return <>
     <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="">
            Listinha do Kam
          </HeaderName>
        </Header>
        <div className="App">
          <header className="headerColor">
      
            <Row className='header-title'>
              {/* <div className="bx--grid bx--grid--no-gutter bx--grid--full-width"> */}
                <div className="" style={{paddingTop:"13%"}}>
                  <h3>Bem vindo a minha lista</h3>
                {/* </div> */}
              </div>
            </Row>
      
          </header>
        </div>
        <br />
      </>
    }
  }
}

export default HeaderComponent()