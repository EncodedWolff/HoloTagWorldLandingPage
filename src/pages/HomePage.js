import React from 'react';
import Container from 'react-bootstrap/Container';

import Carousel from '../components/Carousel';
import Header from '../components/Header';

export default function HomePage(props) {
    return (
        <Container fluid="true">
            <Header title={props.title} />
            <Container className="holotag-green holotag-border">
                <h3>{props.subtitle}</h3>
                <p>{props.description}</p>
            </Container>
            <Carousel nfc={props.nfc} quests={props.quests} />
        </Container>
    );
}