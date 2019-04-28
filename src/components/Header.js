import React from "react";
import styled from "styled-components";
import { Row, Col } from 'react-materialize';

const Div = styled.div`
  background-color: #282c34;
  margin-bottom: 1em;
  background: url(/images/bloom.jpg) no-repeat fixed center center / cover rgba(0, 0, 0, 0);
  height: 100vh;
  overflow: hidden;
  color: #FFFFFF;
  padding-left: 10px;
  font-family: 'Roboto', sans-serif;
`
const Link = styled.a`
  color: white;
  :hover {
    color: 	#E66433;
  }
`
const Name = styled.h1`
  font-size: 150px;
  font-family: 'IBM Plex Sans', sans-serif;
  filter: drop-shadow(0 0 0.75rem black)
`



const Header = () => {
  return (
    <Div>
      <Row>
        <Col m={6} s={12}>
        <Name>Lindsay Chapin</Name>
        </Col>
      </Row>
      <Row>
        <Col s={5}>
        <h3>Full Stack Web Developer</h3>
        </Col>
      </Row>
      <Row>
        <Col s={4}>
        <h3><Link href={process.env.PUBLIC_URL + "LindsayChapin-Resume.pdf"} target="_blank" rel="noopener noreferrer" type="application/pdf" download="LindsayChapin-Resume.pdf">View My Resume</Link></h3>
        </Col>
      </Row>
    </Div>
  )
}

export default Header;
