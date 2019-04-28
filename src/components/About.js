import React from "react";
import styled from "styled-components";
import { Row, Col } from 'react-materialize';

const Img = styled.img`
  border-radius:50%;
  width: 100%;
`
const H1 = styled.h1`
  font-size: 3.25em;
  color: #282c34;
`
const H2 = styled.h1`
  font-size: 2em;
  color: #282c34;
`

const P = styled.p`
  font-size: 1.25em;
`
const Section = styled.section`
  margin: 2%;
  font-family: 'Roboto', sans-serif;
`


const About = () => {
  return (
    <Section>
      <Row>
        <Col s={3} className="offset-s1">
          <Img src="./images/headshot.png" />
        </Col>
        <Col s={7}>
          <H1>Lindsay Chapin</H1>
          <H2>Full Stack Web Developer</H2>
          <P>Hello! I'm Lindsay Chapin, a full stack web developer. I love using technology to creatively solve problems. I work with HTML, CSS, JavaScript, React, and React Native on the frontend and Postgres, MySql, and Mongo on the backend. If I'm not coding you can fine me reading, gardening or hiking with my family.</P>
        </Col>
      </Row>
    </Section>
  )
}

export default About;
