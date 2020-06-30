import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div className="jw-card-info" style={style}>
            <p className="jw-card-title">{props.title}</p>
            <p className="jw-card-subtitle">{props.subTitle}</p>
            <Button href={props.link}>Tell me more!</Button>
        </animated.div>
    );
}

export default CardInfo;