import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Article from '../components/Article';
import Header from '../components/Header';

export default class QuestPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articleList: [
                {
                    articleTitle: "What are quests?",
                    articleContent: "Quests are small goals that are created by users. For instance, you may create a quest that requires that the quest taker to photograph three locations and post to the HoloTag World website. Most quests will be on the honor system. The user can participate as much as they would like and still continue along a quest chain. Also, quests that contain multiple Nodes can be tracked dynamically because the user scans the each HoloTag Node in sequence along the way and updates with the HoloTag World Servers."
                },
                {
                    articleTitle: "How do I start a quest?",
                    articleContent: "To start a quest, locate a HoloTag Node and scan it with your NFC enabled device. You will then be directed to the start page of that quest. In the future, the HoloTag World will have a bracelet that will keep track of all quest details by scanning nodes with the bracelet, when prompted."
                },
                {
                    articleTitle: "How do I create a quest?",
                    articleContent: "To create a quest, you must first purchase a HoloTag Node. Once you have at least one Node, you will visit the HoloTag Quest Creation portal and assign quest tasks to that Node. From there, you can place it anywhere in the world that you would like. To make it public, simply scan it with your NFC enabled device to mark its geographic location, as long as you have location services enabled."
                },
                {
                    articleTitle: "What are Nodes?",
                    articleContent: "Think of Nodes as checkpoints for quests. Some quests have many stops along the way to lead you to areas that are essential to the quest. They also communicate all of the information for the quest between the users, creators, and HoloTag World servers."
                },
                {
                    articleTitle: "How do I find Nodes?",
                    articleContent: "When HoloTag World launches, there will be a map on our website displaying the location of all public Nodes that represent the beginning of a quest."
                }
            ],
            title: props.title
        }
    }

    loadArticles = (articleList) => {
        return articleList.map(article => {
            return (
                <Container fluid="true">
                    <Article articleTitle={article.articleTitle} articleContent={article.articleContent} />
                    <br />
                </Container>


            );
        });
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <Container>
                    {this.loadArticles(this.state.articleList)}

                    <br />
                    <Container className="holotag-green holotag-border">
                        <h5>Example Quest:</h5>
                        <p>
                            You find a node located a the public library and touch your device to the node.
                            The node then directs your device to a link to the quest. The directions of the quest indicate that you should take a photo of your favorite historical monument
                            located at a nearby park and return to the node. Once you complete the task, you return to the node and once again scan it with your device.
                    </p>
                        <p>
                            Now that you have scanned the node once again, it can see that you have previously scanned this node. It will ask you to upload the photo and a story to
                            accompany the photo.
                    </p>
                        <p>
                            From there, you can see the photos and stories that have been posted by other users that have visited the node and comleted the quest.
                    </p>
                    </Container>

                </Container>
                <br />
            </div>
        );
    }
}   