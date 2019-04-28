import React from "react";
import styled from "styled-components";
import { Row, Col, Card, CardTitle } from 'react-materialize';

const Title = styled.h3`
  margin-top: -5%;
  font-family: 'Roboto', sans-serif;
`

const P = styled.p`
  font-family: 'Roboto', sans-serif;
`

const Header = styled.h2`
  text-align: center;
  font-family: 'Roboto', sans-serif;
`

export const ProjectList = props => {
  return (
    <Row>
    <Header>Some of my projects</Header>
      {props.children}
    </Row>
  )
}

export const ProjectListItem = props => {
  return (
    <Col l={3} m={6} s={12}>
      <Card header={<CardTitle image={props.image}/>} actions={[<a href={props.link} target="_blank" rel="noopener noreferrer" key={props.keys}>
        See the project here
        </a>]}>
      <Title>{props.title}</Title>
      <P>{props.desc}</P>
      </Card>
    </Col>
  )
}
