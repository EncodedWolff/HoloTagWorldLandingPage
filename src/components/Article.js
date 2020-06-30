import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';

export default function Article(props) {
    return (
        <Container className="holotag-green holotag-border">
            <Row>
                <Col>
                    <h3>{props.articleTitle}</h3>
                </Col>
                <Col>
                    <p>{props.articleContent}</p>
                </Col>
            </Row>
        </Container>
    );
}