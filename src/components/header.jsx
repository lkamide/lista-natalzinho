import React, { Component } from 'react';
import { HeaderName, Header, Row } from 'carbon-components-react';
import './style.css'

function HeaderComponent() {
  return class extends Component {


    render() {
      return <>
     <Header aria-label="IBM Platform Name">
          <HeaderName href="/" prefix=""  >
            Listinha do Kam
          </HeaderName>
        </Header>
        <div className="App">
          <header className="headerColor">
      
            <Row className='header-title'>
                <div className="" style={{paddingTop:"13%", width: "100%"}}>
                  <h3>Bem vindo a minha lista</h3>
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