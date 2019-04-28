import React from "react";
import styled from "styled-components";
import { Row, Col } from 'react-materialize';

const Div = styled.div`
  text-align: center;
  background-color: #282c34;
  margin-bottom: 1em;
  font-family: 'Roboto', sans-serif;
`
const P = styled.p`
  color: white;
  a {
    color: white;
  }
`

const Footer = () => {
  return (
    <Div>
      <Row>
        <Col s={6} className="offset-s3">
          <P><a href="github.com/lnchapin" target="_blank" rel="noopener noreferrer">Github</a> | <a href="linkedin.com/in/lnchapin" target="_blank" rel="noopener noreferrer">Linkedin</a> | <a href="https://www.youtube.com/channel/UCV4vq8A1V-lhoFi4NcD6V9A" target="_blank" rel="noopener noreferrer">Youtube</a>  | Copyright © 2019 Lindsay Chapin</P>
        </Col>
      </Row>
    </Div>
  )
}

export default Footer;
