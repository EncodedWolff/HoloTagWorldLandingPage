import React from 'react';
import { Button, Container } from 'react-bootstrap';

import Header from '../components/Header';

export default function NfcPage(props) {
    return (
        <Container fluid="true">
            <Header title={props.title} />

            <Container className="fill-screen">
                <div>
                    <h3><strong>What is NFC technology?</strong></h3>
                    <p>
                        Breifly, NFC (or Near Feild Communication) technology, is a type of digital communication that
                        allows two devices to pass information between eachother when they are close.

                        If you want a more in depth explanation, you can find it at the link below
                    </p>
                    <Button href="#">More Information</Button>
                    <br />
                </div>
                <br />
                <div>
                    <h3><strong>How do we use NFC?</strong></h3>
                    <p>
                        The HoloTag World is based on a <a href="/quests">quest system</a>. These quests use HoloTag "nodes" which are NFC enabled to keep track of
                        quest data.
                        When you find a HoloTag World node, you will touch your NFC enabled device --such as a smartphone or tablet-- to the node and it will send the quest information to your device.
                        From there, you will have tasks associated with each of the nodes related to the quest that will either, transfer the information to your device,
                        or that your device will transfer to the node.
                    </p>
                    <br />
                    <div>
                        <p>You can see an example of how this works within the context of a quest <a href="/quests">here</a>.</p>
                    </div>
                </div>
            </Container>
        </Container>
    );
}