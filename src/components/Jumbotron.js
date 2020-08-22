import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Boat from '../assets/boat.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${Boat}) no-repeat fixed bottom;
        background-size: cover;
        color: white;
        height: 250px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const JumboTron = () => (
    <Styles>
        <Jumbo fluid={true} className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome,</h1>
                <p>Full-Stack JavaScript/Python Software Developer</p>
            </Container>
        </Jumbo>
    </Styles>
)

export default JumboTron;