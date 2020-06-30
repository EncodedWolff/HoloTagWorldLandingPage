import React from 'react';

import Header from '../components/Header';

export default function AboutPage(props) {
    return (
        <div>
            <Header title={props.title} />

            <p>
                HoloTag World is a brand new exploration platform that uses modern NFC
                communication to turn your NFC enabled device into a guide along your next adventure.
            </p>
            <br />
            <p>
                When the platform launches, you will be able to pull up a map on our website to locate
                quest starter Nodes. Once you find and scan a Node, the quest instructions will be displayed
                the quest will begin. Quests can vary in length and complexity. This information will be displayed
                on the map before you go to the starter Node so that you know what to expect before beginning.
            </p>
            <br />
            <p>
                For more information about the quest system, visit our <a href="/quests">Quests Page</a>.
            </p>
        </div>

    );
}