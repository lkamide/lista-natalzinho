import React, { Component } from "react";
import {
  Column,
  Row,
  FlexGrid,
} from "carbon-components-react";
// import "./style.css";

function TesteComponent() {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <>
          <FlexGrid>
            <Row>
              <Column sm={2} md={4} lg={6}>
                <div>
                  <p>Small: Span 2 of 4</p>
                  <p>Medium: Span 4 of 8</p>
                  <p>Large: Span 6 of 16</p>
                </div>
              </Column>
              <Column sm={2} md={2} lg={3}>
                <div>
                  <p>Small: Span 2 of 4</p>
                  <p>Medium: Span 2 of 8</p>
                  <p>Large: Span 3 of 16</p>
                </div>
              </Column>
              <Column sm={0} md={2} lg={3}>
                <div>
                  <p>Small: Span 0 of 4</p>
                  <p>Medium: Span 2 of 8</p>
                  <p>Large: Span 3 of 16</p>
                </div>
              </Column>
            </Row>
          </FlexGrid>
        </>
      );
    }
  };
}

export default TesteComponent();
