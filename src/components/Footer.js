import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(
    faFacebook,
    faInstagram
);

export default function Footer() {
    return (
        <Container fluid="true" className="footer holotag-green text-light" lg={12} md={6} sm={3}>
            <Row>
                <Col>Holotag World 2020</Col>
                <Col>
                    <FontAwesomeIcon icon={faFacebook} />
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faInstagram} />
                </Col>
            </Row>
        </Container>
    );
}