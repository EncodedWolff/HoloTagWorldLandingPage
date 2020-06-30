import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

import nfcImage from '../images/nfc.png';
import questImage from '../images/quests.jpeg';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: props.nfc.title,
                    subTitle: props.nfc.summary,
                    imgSrc: nfcImage,
                    link: '/nfc',
                    selected: false
                },
                {
                    id: 1,
                    title: props.quests.title,
                    subTitle: props.quests.summary,
                    imgSrc: questImage,
                    link: '/quests',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>

        );
    }
}

export default Carousel;