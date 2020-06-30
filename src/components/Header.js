import React from 'react';
import { Col, Container, Jumbotron } from 'react-bootstrap';

export default function Header(props) {

    return (
        <Jumbotron className="header">
            <Container>

                <Col className="text-light align-middle">
                    <h1>{props.title}</h1>
                </Col>

            </Container>
        </Jumbotron>
    );
}