import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container fluid="true" className="footer">
            <Row>
                <Col>Holotag World 2020</Col>
                <Col>Facebook Link</Col>
                <Col>Instagram Link</Col>
                <Col>Twitter Link</Col>
            </Row>
        </Container>
    );
}